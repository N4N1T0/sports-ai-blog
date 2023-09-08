import { NextResponse } from 'next/server'
import { prisma } from '../client'

export async function POST (request: Request) {
  try {
    const { email } = await request.json()

    const user = await prisma.subscriber.create({
      data: {
        email,
        verifiedEmail: false
      }
    })

    return NextResponse.json({ content: user }, { status: 200 })
  } catch (error) {
    console.error('request error:', error)
    throw new Error('Error Creating Subscriber')
  }
}
