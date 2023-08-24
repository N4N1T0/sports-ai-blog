import React from 'react'
import Card from 'app/(shared)/Card'
import { type Post } from '@prisma/client'

interface MmaProps {
  posts: Post[]
}

const Mma = ({ posts }: MmaProps) => {
  return (
    <section>
      <hr className='border-1'/>
      {/* Header */}

      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase'>MMA</h4>
        <p className='font-bold text-2xl'>Latest in Mix Martial Arts</p>
      </div>

      {/* Section  */}
      <div className='sm:grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-3 my-4'>
        <Card
          className='row-span-3 col-span-1'
          imageHeight='h-96'
          isLongForm
          post={posts[0]}
        />
        <Card
          className='row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeight='h-40'
          isSmallCard
          post={posts[1]}
        />
        <Card
          className='row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeight='h-40'
          isSmallCard
          post={posts[2]}
        />
        <Card
          className='row-span-1 col-span-1 mt-5 sm:mt-0 flex-between'
          imageHeight='h-40'
          isSmallCard
          post={posts[3]}
        />
      </div>
    </section>
  )
}

export default Mma
