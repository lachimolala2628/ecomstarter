import React, { Suspense, useContext, useEffect } from 'react'
import Slider from '@/components/Slider'
import ProductList from '@/components/ProductList'
import CategoryList from '@/components/CategoryList'
import { WixClientContext } from '@/context/WixContext'
import { useWixClient } from '@/hooks/useWixClient'
import { wixClientServer } from '@/lib/wixClientServer'
import Skeleton from '@/components/Skeleton'

const Homepage = async () => {

  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);
  //   };

  //   getProduct();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div>
      <Slider />
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>
      <div className='mt-24'>
        <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>
    </div>
  )
}

export default Homepage