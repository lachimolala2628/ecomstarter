'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ProductImages = ({ items }: { items: any }) => {

    const [index, setIndex] = useState(0);

    return (
        <div className=''>
            <div className='h-[500px] relative '>
                <Image src={items[index].image?.url} alt='Product Image' fill sizes='50vw' className='object-cover rounded-md' />
            </div>
            <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
                {
                    items.map((item: any, i: number) => (
                        <div className='h-32 w-1/4 relative mt-8 gap-4' key={item._id} onClick={() => setIndex(i)}>
                            <Image src={item.image?.url} alt='Product Image' fill sizes='30vw' className='object-cover rounded-md'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages