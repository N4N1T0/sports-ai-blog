import React from 'react'
import Card from 'app/(shared)/Card'
import { type Post } from '@prisma/client'

interface BoxingProps {
  posts: Post[]
}

const Boxing = ({ posts }: BoxingProps) => {
  return (
    <section className='mt-10'>
      <hr className='border-1'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase'>Boxing</h4>
        <p className='font-bold text-2xl'>Latest in Boxing</p>
      </div>

      {/* Section */}
      <div className='sm:flex justify-between gap-6'>
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[0]}
        />
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[1]}
        />
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[2]}
        />
      </div>
      <Card
        className='sm:flex justify-between items-center gap-5 mt-6 mb-4'
        imageHeight='h-80'
        post={posts[3]}
        />
    </section>
  )
}

export default Boxing
