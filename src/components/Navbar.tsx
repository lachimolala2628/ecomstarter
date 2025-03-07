'use client'

import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* Mobile Screen */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href='/'>
                    <div className='text-2xl tracking-wide'>
                        UrbanCart
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Desktop Screen */}
            <div className='hidden md:flex items-center h-full justify-between gap-8'>
                {/* Left */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href='/'>
                        <div className='text-2xl tracking-wide'>
                            UrbanCart
                        </div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                        <Link href='/'>Shop</Link>
                        <Link href='/'>Deals</Link>
                    </div>
                </div>
                {/* right */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar