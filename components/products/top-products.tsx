import {ItemSkeleton} from '@/components/index/itemskeleton'


const TopProducts = ({category}:{category: string}) => {
  return (
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
  )
}

export default TopProducts