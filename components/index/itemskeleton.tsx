import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'

type ItemProps = {
  id: number,
  title: string,
  images: string[],
  description: string,
  price: number
}

type Item = {
  item: ItemProps
}

const ItemSkeleton = () => {
  return (
    <div className='flex flex-col min-w-[185px]'>
      <Skeleton className='h-36 bg-slate-300 rounded-sm' />
      <Skeleton className='h-4 mt-1 bg-slate-300 rounded-sm' />
      <Skeleton className='h-4 mt-4 w-1/2 bg-slate-300 rounded-sm' />
      <Skeleton className='h-4 mt-1 w-[70%] bg-slate-300 rounded-sm' />
    </div>
  )
}

const ItemCard = ({item}: Item) => {
  return (
    <div className='flex flex-col min-w-[185px] rounded-sm p-1.5 shadow-lg'>
      {/* <Skeleton className='h-36 bg-slate-300 rounded-sm' /> */}
      <div className="h-48 overflow-hidden">
        <Image src={item?.images[0]} alt='image' fill />
      </div>
      <h4 className='mt-1 font-bold capitalize'>{item?.title}</h4>
      <p className='lmt-4 ine-clamp-2 text-xs text-wrap grow'>{item?.description}</p>
      <h3 className='mt-1 text-xl font-black'>${item?.price}</h3>
    </div>
  )
}


export {ItemSkeleton, ItemCard} 