import {ItemSkeleton} from '@/components/index/itemskeleton'

type CategoryProps = {
    category: string
}


const CategoryProducts = ({category}: CategoryProps) => {
    return (
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
    )
}

export default CategoryProducts