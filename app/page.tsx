import Trending from 'app/(home)/Trending'
import Mma from 'app/(home)/Mma'
import Boxing from 'app/(home)/Boxing'
import OtherPosts from '@/app/(shared)/OtherPosts'
import Subscribe from '@/app/(shared)/Subscribe'
import Sidebar from 'app/(shared)/Sidebar'
import { prisma } from 'app/api/client'
import { type Post } from '@prisma/client'

export const revalidate = 120

const getPosts = async () => {
  const posts = await prisma.post.findMany()
  return posts
}

export default async function Home () {
  const posts = await getPosts()

  const formatPosts = () => {
    const trendingPosts: Post[] = []
    const boxingPosts: Post[] = []
    const mmaPosts: Post[] = []
    const fitnessPosts: Post[] = []
    const otherPosts: Post[] = []

    posts.forEach((post: Post, i: number) => {
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
    <main className="px-8 leading-5">
      <Trending posts={trendingPosts}/>
      <div className="md:flex gap-8 mb-5">
        <div className="basis-3/4">
          <Mma posts={mmaPosts} />
          <Boxing posts={boxingPosts} />
          <OtherPosts title='Fitness' subTitle='Latest in Fitness' posts={fitnessPosts} />
          <OtherPosts title='Other Posts' subTitle='A little bit of everything' posts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
