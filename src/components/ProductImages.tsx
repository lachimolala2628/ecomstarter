'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];


const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className=''>
            <div className='h-[500px] relative '>
                <Image src={images[index].url} alt='Product Image' fill sizes='50vw' className='object-cover rounded-md' />
            </div>
            <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
                {
                    images.map((img, i) => (
                        <div className='h-32 w-1/4 relative mt-8 gap-4' key={img.id} onClick={() => setIndex(i)}>
                            <Image src={img.url} alt='Product Image' fill sizes='30vw' className='object-cover rounded-md' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages