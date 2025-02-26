'use client'

import React, { useState } from 'react'
import { useWixClient } from '@/hooks/useWixClient';
import { LoginState } from '@wix/sdk';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

enum MODE {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    RESET_PASSWORD = 'RESET_PASSWORD',
    EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const Loginpage = () => {

    const wixClient = useWixClient();
    const router = useRouter();

    const isLoggedIn = wixClient.auth.loggedIn();

    if (isLoggedIn) {
        router.push('/')
    }


    const [mode, setMode] = useState(MODE.LOGIN);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailCode, setEmailCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');


    const formTitle = mode === MODE.LOGIN ? 'Welcome Back! Log In to Continue' : mode === MODE.REGISTER ? 'Welcome! Create Your Account' : mode === MODE.RESET_PASSWORD ? 'Reset your password' : 'Verify your email'

    const buttonTitle = mode === MODE.LOGIN ? 'Login' : mode === MODE.REGISTER ? 'Register' : mode === MODE.RESET_PASSWORD ? 'Reset' : 'Verify'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            let response;

            switch (mode) {
                case MODE.LOGIN:
                    response = await wixClient.auth.login({
                        email,
                        password,
                    });
                    break;
                case MODE.REGISTER:
                    response = await wixClient.auth.register({
                        email,
                        password,
                        profile: { nickname: username }
                    });
                    break;
                case MODE.RESET_PASSWORD:
                    response = await wixClient.auth.sendPasswordResetEmail(
                        email,
                        window.location.href,
                    );

                    setMessage('Password reset email sent. please check your email')
                    break;
                case MODE.EMAIL_VERIFICATION:
                    response = await wixClient.auth.processVerification({
                        verificationCode: emailCode,
                    });
                    break;
                default:
                    break;
            }
            console.log(response);

            switch (response?.loginState) {
                case LoginState.SUCCESS:
                    setMessage("Successful! You are being redirected.");
                    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
                        response.data.sessionToken!
                    );
                    Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
                        expires: 2,
                    });
                    wixClient.auth.setTokens(tokens);
                    router.push("/");
                    break;
                case LoginState.FAILURE:
                    if (response.errorCode === 'invalidEmail' || response.errorCode === 'invalidPassword') {
                        setError('Invalid Email or Password!');
                    } else if (response.errorCode === 'emailAlreadyExists') {
                        setError('Email already exists!');
                    } else if (response.errorCode === 'resetPassword') {
                        setError('You need to reset your password!');
                    } else {
                        setError('Something went wrong!');
                    }
                case LoginState.EMAIL_VERIFICATION_REQUIRED:
                    setMode(MODE.EMAIL_VERIFICATION);
                case LoginState.OWNER_APPROVAL_REQUIRED:
                    setMessage("Your account is pending approval");
                default:
                    break;
            }

        } catch (error) {
            console.log(error);
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            {formTitle}
                        </h2>
                    </div>
                    {
                        mode === MODE.REGISTER ? (
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="username"
                                        type="text"
                                        placeholder='Enter your username'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-pussy placeholder:text-gray-400 sm:text-sm/6"
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        mode !== MODE.EMAIL_VERIFICATION ? (
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder='your@gmail.com'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-pussy placeholder:text-gray-400 sm:text-sm/6"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Verfication Code
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="text"
                                        type="emailCode"
                                        placeholder='Your verfication code'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-pussy placeholder:text-gray-400 sm:text-sm/6"
                                        onChange={e => setEmailCode(e.target.value)}
                                    />
                                </div>
                            </div>
                        )
                    }
                    {
                        mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder='Enter your password'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-pussy placeholder:text-gray-400 sm:text-sm/6"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        mode === MODE.LOGIN &&
                        <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.RESET_PASSWORD)}>
                            Forgot Password?
                        </div>
                    }
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-pussy px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-pussy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pussy disabled:cursor-not-allowed" disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : buttonTitle}
                        </button>
                    </div>
                    {
                        error && (
                            <div className='text-pussy'>{error}</div>
                        )
                    }
                    {
                        mode === MODE.LOGIN && (
                            <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.REGISTER)}>
                                {"Don't"} have an account?
                            </div>
                        )
                    }
                    {
                        mode === MODE.REGISTER && (
                            <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>
                                have an account?
                            </div>
                        )
                    }
                    {
                        mode === MODE.RESET_PASSWORD && (
                            <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>
                                Go back to Login
                            </div>
                        )
                    }
                    {
                        message && <div className='text-green-600 text-sm font-semibold'>{message}</div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Loginpage