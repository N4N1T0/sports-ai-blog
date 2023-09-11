import { AIApiError } from '@/lib/errors'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY
})
const openai = new OpenAIApi(configuration)

export async function POST (request: Request) {
  try {
    const { title, role } = await request.json()

    const aiResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Create 3 line blog post with html tags based on this title: ${title}`
        },
        {
          role: 'system',
          content: `${role ?? 'I am a helpful assistant'}. Write with html tags`
        }
      ]
    })

    return NextResponse.json({ content: aiResponse.data.choices[0].message?.content }, { status: 200 })
  } catch (error) {
    throw new AIApiError('Error updating post')
  }
}
