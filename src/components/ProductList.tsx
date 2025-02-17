import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src='https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>
                    My description
                </div>
                <button className='rounded-2xl ring-1 w-max ring-pussy text-pussy py-2 px-4 text-sm hover:bg-pussy hover:text-white'>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src='https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>
                    My description
                </div>
                <button className='rounded-2xl ring-1 w-max ring-pussy text-pussy py-2 px-4 text-sm hover:bg-pussy hover:text-white'>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src='https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>
                    My description
                </div>
                <button className='rounded-2xl ring-1 w-max ring-pussy text-pussy py-2 px-4 text-sm hover:bg-pussy hover:text-white'>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src='https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Product Image' fill sizes='25vw' className='absolute object-cover rounded-md' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>
                    My description
                </div>
                <button className='rounded-2xl ring-1 w-max ring-pussy text-pussy py-2 px-4 text-sm hover:bg-pussy hover:text-white'>Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList