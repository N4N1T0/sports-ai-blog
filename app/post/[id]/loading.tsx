import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className="flex w-full px-8 gap-3 flex-col">
      <Skeleton className="h-4 w-1/2 bg-wh-100" />
      <Skeleton className="h-8 w-20 bg-wh-100" />
      <Skeleton className="h-12 w-3/4 bg-wh-100" />
      <Skeleton className="h-4 w-1/4 bg-wh-100" />
      <Skeleton className="h-96 w-full bg-wh-100" />
      <Skeleton className="h-4 w-1/2 bg-wh-100" />
      <Skeleton className="h-4 w-1/2 bg-wh-100" />
      <Skeleton className="h-4 w-1/2 bg-wh-100" />
    </div>
  )
}

export default loading
