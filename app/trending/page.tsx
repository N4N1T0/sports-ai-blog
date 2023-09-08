import { prisma } from 'app/api/client'
import OtherPosts from '../(shared)/OtherPosts'
import Sidebar from 'app/(shared)/Sidebar'

export const revalidate = 120

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    take: 8,
    orderBy: {
      createdAt: 'asc'
    },
    include: {
      author: true
    }
  })
  return posts
}

async function TrendingPage () {
  const posts = await getPosts()

  return (
    <main className='px-8 leading-5'>
      <div className='md:flex gap-8'>
        <div className='basis-3/4'>
          <OtherPosts title='Trending' subTitle='All the post currently being Trending in the web and the blog' posts={posts} />
        </div>
        <div className='basis-1/4 md:mt-8 mt-2'>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default TrendingPage
