import { prisma } from '@/app/api/client'
import { type PostType, type FormattedPost, type PostPageProps } from '@/lib/types'
import Content from './Content'
import Sidebar from '@/app/(shared)/Sidebar'
import SocialLinks from '@/app/(shared)/SocialLinks'
import { PostNotFoundError } from '@/lib/errors'

export const revalidate = 120

const getPost = async (id: string) => {
  try {
    const post: PostType | null = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true
      }
    })
    if (post === null) {
      throw new PostNotFoundError('Post not Found')
    }

    const formattedPost = {
      ...post,
      createdAt: post?.createdAt?.toISOString(),
      updatedAt: post?.updatedAt?.toISOString()
    }

    return formattedPost
  } catch (error) {
    throw new PostNotFoundError('Post not Found')
  }
}

const page = async ({ params }: PostPageProps) => {
  const { id } = params
  const post: FormattedPost | null = await getPost(id)

  return (
    <main className='px-8 leading-5'>
    <div className='md:flex gap-7 mb-5'>
      <div className='basis-3/4'>
        <Content post={post} />
        <h4 className='underline font-bold mb-1'>Share it in Social Media:</h4>
        <SocialLinks articleTitle={post?.title} articleUrl={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`} />
      </div>
      <div className='basis-1/4'>
        <Sidebar
          name={post?.author?.name}
          bio={post?.author?.bio}
          image={post?.author?.image}
          page='post'
       />
      </div>
    </div>
  </main>
  )
}

export default page
