'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className='flex justify-between items-center gap-4 bg-gray-200 rounded-md flex-1 p-2' onSubmit={handleSearch}>
            <input placeholder='Search' name='name' type='text' className='flex-1 bg-transparent outline-none ' />
            <button className='cursor-pointer'>
                <Image src='/search.png' alt='search' height={16} width={16} />
            </button>
        </form>
    )
}

export default SearchBar