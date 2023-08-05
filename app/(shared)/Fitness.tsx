import React from 'react'
import Card from './Card'
import { Post } from "@prisma/client"

type FitnessProps = {
  posts: Array<Post>
}

const Fitness = ({ posts }: FitnessProps) => {
  return (
    <section className='pt-2 mb-10'>
      <hr className='border-1'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-green py-2 px-4 text-wh-900 text-sm font-bold uppercase'>Fitness</h4>
        <p className='font-bold text-2xl'>Latest in Fitness</p>
      </div>

      {/* Section */}
      <div className='sm:grid grid-cols-2 gap-8'>
        <Card 
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[0]}
        />
        <Card 
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[1]}
        />
        <Card 
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[2]}
        />
        <Card 
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[3]}
        />
      </div>
    </section>
  )
}

export default Fitness