import Trending from 'app/(home)/Trending'
import Mma from 'app/(home)/Mma'
import Boxing from 'app/(home)/Boxing'
import OtherPosts from '@/app/(shared)/OtherPosts'
import Sidebar from 'app/(shared)/Sidebar'
import { prisma } from 'app/api/client'
import { type PostType } from '@/lib/types'
import type { Metadata } from 'next'
import { HomeMetadata } from './seo'

export const metadata: Metadata = HomeMetadata
export const revalidate = 120

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  })
  return posts
}

async function Home () {
  const posts = await getPosts()

  const formatPosts = () => {
    const trendingPosts: PostType[] = []
    const boxingPosts: PostType[] = []
    const mmaPosts: PostType[] = []
    const fitnessPosts: PostType[] = []
    const otherPosts: PostType[] = []

    posts.forEach((post: PostType, i: number) => {
      if (i < 4) {
        trendingPosts.push(post)
      }
      if (post?.category === 'Boxing') {
        boxingPosts.push(post)
      } else if (post?.category === 'MMA') {
        mmaPosts.push(post)
      } else if (post?.category === 'Fitness') {
        fitnessPosts.push(post)
      } else if (post?.category === 'Bussines') {
        otherPosts.push(post)
      }
    })

    return [trendingPosts, boxingPosts, mmaPosts, fitnessPosts, otherPosts]
  }

  const [trendingPosts, boxingPosts, mmaPosts, fitnessPosts, otherPosts] = formatPosts()

  return (
    <main className='px-8 leading-5'>
      <Trending posts={trendingPosts}/>
      <div className='md:flex gap-8 mb-5'>
        <div className='basis-3/4'>
          <Mma posts={mmaPosts} />
          <Boxing posts={boxingPosts} />
          <OtherPosts title='Fitness' subTitle='Latest in Fitness' posts={fitnessPosts} withLine/>
          <OtherPosts title='Other Posts' subTitle='A little bit of everything' posts={otherPosts} withLine/>
        </div>
        <div className='basis-1/4'>
          <Sidebar page='intro'/>
        </div>
      </div>
    </main>
  )
}

export default Home
