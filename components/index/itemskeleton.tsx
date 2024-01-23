import React from 'react'
import { Skeleton } from '../ui/skeleton'

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

export default ItemSkeleton