import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
            <div className='flex flex-col md:flex-row justify-between gap-24'>
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                    <Link href='/'>
                        <div className='text-2xl tracking-wide'>
                            UrbanCart
                        </div>
                    </Link>
                    <p>14th street, New York, United States</p>
                    <span className='font-semibold '>hello@urbancart.com</span>
                    <span className='font-semibold '>+1 253 542 5320</span>
                    <div className='flex gap-6 '>
                        <Image src='/instagram.png' alt='Instagram' height={16} width={16} />
                        <Image src='/facebook.png' alt='Facebook' height={16} width={16} />
                        <Image src='/printerest.png' alt='Printerest' height={16} width={16} />
                        <Image src='/x.png' alt='X' height={16} width={16} />
                    </div>
                </div>
                <div className='w-1/2 hidden lg:flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <h1 className='font-medium text-lg'>COMPANY</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href="">About</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">New Arrivals</Link>
                            <Link href="">Accessories</Link>
                            <Link href="">Men</Link>
                            <Link href="">Women</Link>
                            <Link href="">All Products</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>Be the first to get latest news about trends, promotions, and much more!</p>
                    <div className='flex'>
                        <input type='email' placeholder='email address' className='p-4 w-3/4' />
                        <button className='w-1/4 bg-pussy text-white'>
                            JOIN
                        </button>
                    </div>
                    <span className='font-semibold'>
                        Secure Payments
                    </span>
                    <div className='flex justify-between'>
                        <Image src='/paypal.png' alt='PayPal' height={20} width={40} />
                        <Image src='/discover.png' alt='Discover' height={20} width={40} />
                        <Image src='/visa.png' alt='Visa' height={20} width={40} />
                        <Image src='/mastercard.png' alt='Mastercard' height={20} width={40} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
                <div className="">&copy; {currentYear} UrbanCart</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium">United States | English</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Currency</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer