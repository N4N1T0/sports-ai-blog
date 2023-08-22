import React from 'react'
import Card from './Card'
import { Post } from "@prisma/client"

type FitnessProps = {
  posts: Array<Post>
  title: String
  subTitle: String
}

const OtherPosts = ({ posts, title, subTitle }: FitnessProps) => {
  return (
    <section className='pt-2 mb-10'>
      <hr className='border-1'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase'>{title}</h4>
        <p className='font-bold text-2xl'>{subTitle}</p>
      </div>

      {/* Section */}
      <div className='sm:grid grid-cols-2 gap-8'>
        {posts.map(item => (
          <Card 
          key={item.id}
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={item}
          />
        ))} 
      </div>
    </section>
  )
}

export default OtherPosts