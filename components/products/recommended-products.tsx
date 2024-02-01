import Link from "next/link"
import {ItemSkeleton} from "../index/itemskeleton"


const RecommendedProducts = () => {
    return (
        <section className='bg-white shadow-lg rounded'>
            {/* Container */}
            <div className='flex flex-col p-3 gap-y-2'>
                <div className='flex justify-between items-center'>
                    <h5 className='text-destructive text-sm uppercase font-extrabold'>Recommended for you</h5>
                    <Link href='' className='text-orange text-xs font-bold'>See All &gt;&gt;</Link>
                </div>
                {/* Items */}
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
    )
}

export default RecommendedProducts