import React from 'react'
import { prisma } from '@/app/api/client'
import { Post as PostType } from "@prisma/client"
import { FormattedPost } from 'app/type'
import Content from './Content'
import Sidebar from '@/app/(shared)/Sidebar'

export const revalidate = 120

type Props = {
  params: { id: string}
}

const getPost = async ( id: string ) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id }
  })

  if (!post) {
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

const page = async ({ params }: Props) => {
  const { id } = params
  const post: FormattedPost | null = await getPost(id)

  if (!post) {
    return <div>Post Not Found</div>
  }

  return (
    <main className="px-8 leading-5">
    <div className="md:flex gap-7 mb-5">
      <div className="basis-3/4">
        <Content post={post} />
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div>
  </main>
  )
}

export default page