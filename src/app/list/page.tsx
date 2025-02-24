import React, { Suspense } from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'
import Skeleton from '@/components/Skeleton'

const Listpage = async ({ searchParams }: { searchParams: any }) => {

    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || 'all-products');


    return (
        <div>
            {/* CAMPAIGN */}
            <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
                <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
                    <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
                        Grab up to 50% off on <br /> Selected Products
                    </h1>
                    <button className='rounded-3xl bg-pussy text-white w-max py-3 px-5 text-sm'>
                        Buy Now
                    </button>
                </div>
                <div className='relative w-1/3'>
                    <Image src='/woman.png' alt='Banner Image' fill className='object-contain' />
                </div>
            </div>
            <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
                <Filter />
                {/* PRODUCT */}
                <h1 className='text-xl font-semibold mt-12'>{cat?.collection?.name} For You!</h1>
                <Suspense fallback={<Skeleton />}>
                    <ProductList categoryId={cat.collection?._id || '00000000-000000-000000-000000000001'} searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    )
}

export default Listpage