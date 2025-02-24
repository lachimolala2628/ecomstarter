"use client"

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({ currentPage, hasPrev, hasNext }: { currentPage: number, hasPrev: boolean, hasNext: boolean, }) => {


    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className='mt-12 flex w-full justify-between'>
            <button disabled={!hasPrev} className='rounded-md bg-pussy text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' onClick={() => createPageUrl(currentPage - 1)}>
                Previous
            </button>
            <button disabled={!hasNext} className='rounded-md bg-pussy text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' onClick={() => createPageUrl(currentPage + 1)}>
                Next
            </button>
        </div>
    )
}

export default Pagination