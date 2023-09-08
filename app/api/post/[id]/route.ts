import { NextResponse } from 'next/server'
import { prisma } from '../../client'
import { type PostIdParams } from '@/lib/types'

export async function PATCH (request: Request, { params }: PostIdParams) {
  try {
    const { id } = params
    const { title, content } = await request.json()
    const post = await prisma.post.update({
      where: { id },
      data: { title, content }
    })
    return NextResponse.json(post, { status: 200 })
  } catch (error) {
    console.error('request error:', error)
    NextResponse.json({ error: 'Error updating post' }, { status: 500 })
  }
}
