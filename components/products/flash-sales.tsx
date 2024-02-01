import React from 'react'
import Link from 'next/link'
import {ItemSkeleton} from '../index/itemskeleton'
import { FaArrowRightLong } from "react-icons/fa6";

const FlashSales = () => {
    return (
        <section className='bg-white shadow-lg rounded'>
            <div className='flex flex-col'>
                <h3 className='bg-destructive text-white font-semibold p-2 rounded-t'>Flash Sales</h3>
                <div className='p-3 grid grid-cols-2'>
                    <div className='px-2'>
                        <ItemSkeleton />
                    </div>
                    <div className='px-2'>
                        <Link href='/' className='h-full border border-orange rounded-md flex flex-col items-center justify-center gap-y-2 md:max-w-40 md:ml-auto'>
                            <h5 className='text-3xl font-bold'>Shop<br />Now</h5>
                            <span className='p-2 text-white bg-orange text-2xl rounded-full'><FaArrowRightLong /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashSales