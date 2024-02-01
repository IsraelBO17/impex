import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import delivery from '@/public/images/delivery.jpg'
import {ItemSkeleton} from '@/components/index/itemskeleton'
import Link from 'next/link'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'My Cart', path: '/cart'}
]


const CartPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Cart Section */}
        <section className='px-3 bg-white shadow-lg rounded'>
            <div className='flex flex-col p-3 gap-y-2'>
                <h5 className='text-destructive text-sm uppercase font-extrabold'>Cart(0)</h5>
                <div></div>
            </div>
        </section>

        {/* Other Products Section */}
        <section className="mb-3 px-3 bg-white shadow-lg rounded">
            {/* Container */}
        <div className='flex flex-col p-3 xl:p-4 gap-y-2 xl:gap-y-4'>
          <div className='flex justify-between items-center'>
            <h5 className='text-destructive text-sm uppercase font-extrabold'>Other products for you</h5>
            <Link href='' className='text-orange text-xs font-bold'>See All &gt;&gt;</Link>
          </div>
          <div className='flex gap-x-4 overflow-x-scroll py-3'>
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

export default CartPage