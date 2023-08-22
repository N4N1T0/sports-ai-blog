import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

const loading = (props: Props) => {
  return (
    <section className='pt-3 pb-8 px-8'>
        <div className='flex items-center gap-3'>
          <Skeleton className='h-8 w-12 bg-wh-100' />
          <Skeleton className='h-8 w-1/2 bg-wh-100' />
        </div>
        <div className='sm:grid gap-4 grid-cols-4 grid-rows-2 sm:h-[500px] my-2'>
          <Skeleton className='col-span-2 row-span-2 bg-wh-100' />
          <Skeleton className='col-span-2 row-span-1 bg-wh-100' />
          <Skeleton className='col-span-1 row-span-1 bg-wh-100' />
          <Skeleton className='col-span-1 row-span-1 bg-wh-100' />
        </div>
        <Skeleton className='h-8 w-3/4 bg-wh-100' />
      </section>
  )
}

export default loading