import React from 'react'
import { prisma } from '@/app/api/client'
import { type PostType, type FormattedPost, type PostPageProps } from '@/lib/types'
import Content from './Content'
import Sidebar from '@/app/(shared)/Sidebar'

export const revalidate = 120

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
    include: {
      author: true
    }
  })

  if (post === null) {
    console.log(`Post with the Id ${id} not found`)
    return null
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString()
  }

  return formattedPost
}

const page = async ({ params }: PostPageProps) => {
  const { id } = params
  const post: FormattedPost | null = await getPost(id)

  return (
    <main className='px-8 leading-5'>
    <div className='md:flex gap-7 mb-5'>
      <div className='basis-3/4'>
        <Content post={post} />
      </div>
      <div className='basis-1/4'>
        <Sidebar
          name={post?.author?.name}
          bio={post?.author?.bio}
          image={post?.author?.image}
       />
      </div>
    </div>
  </main>
  )
}

export default page
