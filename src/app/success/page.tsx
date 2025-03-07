'use client'

import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import Confetti from 'react-confetti'


const SuccessPage = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const orderId = searchParams.get("orderId");

    useEffect(() => {
        if (!orderId) return;

        const timer = setTimeout(() => {
            // router.push("/orders/" + orderId); 
            router.push('/orders');
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [orderId, router]);

    return (
        <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <h1 className="text-6xl text-green-700">Successful</h1>
            <h2 className="text-xl font-medium">
                We sent the invoice to your email
            </h2>
            <h3 className="">You are being redirected to the order page...</h3>
        </div>
    )
}

export default SuccessPage;