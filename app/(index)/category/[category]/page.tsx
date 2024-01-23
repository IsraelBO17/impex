import React from 'react'
import Categories from '@/components/index/categories';
import ItemSkeleton from '@/components/index/itemskeleton';

const ProductPage = ({params}: {params: {category: string}}) => {
  const category = decodeURIComponent(params.category);
  return (
    <>
      {/* Side Nav, Category Banner */}
      <section className='px-3 mt-3 md:p-0'>
        <div className='grid lg:grid-cols-10 lg:gap-x-3'>
          {/* Side Nav */}
          <div className='hidden lg:block lg:h-96 xl:h-[500px] col-span-3 xl:col-span-2 bg-white p-2 rounded shadow-lg overflow-y-scroll'>
            <Categories />
          </div>
          {/* Category Banner */}
          <div className='lg:col-span-7 xl:col-span-8 shadow-lg'>
            
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className='bg-white shadow-lg rounded'>
        {/* Container */}
        <div className='flex flex-col p-3 xl:p-4 gap-y-2 xl:gap-y-4'>
          <h3 className='text-destructive text-sm uppercase font-extrabold'>Top Products</h3>
          <div className='flex gap-x-4 overflow-x-scroll py-3'>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
          </div>
        </div>
      </section>

      {/* Category Products */}
      <section className='bg-white shadow-lg rounded mb-3'>
        {/* Container */}
        <div className='flex flex-col p-3 xl:p-4 gap-y-2 xl:gap-y-4'>
          <h3 className='text-destructive text-sm uppercase font-extrabold'>{category}</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage