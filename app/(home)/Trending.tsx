import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { type Post } from '@prisma/client'

interface TrendingCardsProps {
  className?: string
  post: Post
}

const TrendingCard = ({ className, post }: TrendingCardsProps) => {
  return (
    <Link
     className={`${className} sm:mt-0 sm:h-auto relative mt-5 block w-full h-96 hover:opacity-70 transition-all duration-200`}
     href={`/post/${post?.id}`}
    >
      <div className='z-0 relative w-full h-full'>
        <Image
          fill
          sizes='(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          alt={post?.title}
          style={{ objectFit: 'cover' }}
          src={post?.image}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
      </div>
      <div className='absolute z-1 w-full h-full inset-0 bg-gradient-gradual' />
      <div className='absolute z-2 bottom-0 left-0 p-3'>
         <h4 className='inline-block px-4 py-1 font-semibold bg-accent-orange text-wh-900'>{post?.category}</h4>
         <div className='text-wh-100 mt-1'>{post?.title}</div>
      </div>
    </Link>
  )
}

interface TrendingProps {
  posts: Post[]
}

const Trending = ({ posts }: TrendingProps) => {
  return (
    <section className='pt-3 pb-8 space-y-4'>
      <div className='flex items-center gap-2'>
        <div className='uppercase bg-accent-orange py-2 px-8 text-wh-900 font-bold mr-2'>trending
        </div>
        <p className='text-sm'>From Explosive Knockouts to Dominant Wins, Explore the Latest Trends Shaping the Pulse-Pounding World of Combat Athletics. Get Hooked on Action!</p>
      </div>

       {/* Grid Articules */}
       <div className='sm:grid gap-4 grid-cols-4 grid-rows-2 sm:h-[500px] my-2'>
         <TrendingCard className='col-span-2 row-span-2 bg-wh-500' post={posts[0]} />
         <TrendingCard className='col-span-2 row-span-1 bg-wh-500' post={posts[1]} />
         <TrendingCard className='col-span-1 row-span-1 bg-wh-500' post={posts[2]} />
         <TrendingCard className='col-span-1 row-span-1 bg-wh-500' post={posts[3]} />
      </div>
    </section>
  )
}

export default Trending
