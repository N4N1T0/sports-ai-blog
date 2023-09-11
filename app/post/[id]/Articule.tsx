import React, { useState } from 'react'
import { EditorContent } from '@tiptap/react'
import { Rocket } from 'lucide-react'
import EditorMenuBar from './EditorMenuBar'
import { type ArticuleProps } from '@/lib/types'
import { AIProcessingError } from '@/lib/errors'

function Articule ({
  contentError,
  editor,
  isEditable,
  setContent,
  title
}: ArticuleProps) {
  const [role, setRole] = useState<string>('I am a helpful assistant.')

  if (editor === null) {
    return null
  }

  const postAiContent = async () => {
    try {
      editor
        .chain()
        .focus()
        .setContent('Generating Ai Content. Please Wait...')
        .run()

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          role
        })
      })
      const data = await response.json()

      editor.chain().focus().setContent(data.content).run()
      setContent(data.content)
    } catch (error) {
      throw new AIProcessingError('Can&apos;t write the post right now')
    }
  }

  return (
    <article className='text-wh-500 leading-8'>

      {/* AI Generator */}
      {isEditable && (
        <div className='border-2 border-accent-orange rounded-md bg-wh-50 dark:bg-wh-500 p-3 mb-3'>
          <h4 className='dark:text-wh-10 p-0 m-0'>Generate AI Content</h4>
          <p className='my-1 text-sm dark:text-wh-100'>What type of writer do you want?</p>
          <div className='flex-between gap-5'>
            <input
              type='text'
              className='border-2 border-accent-orange rounded-md bg-wh-50 dark:bg-wh-500 dark:text-wh-50 px-3 py-1 w-full'
              placeholder='Role'
              onChange={(e) => { setRole(e.target.value) }}
              value={role}
            />
            <button type='button' onClick={postAiContent}>
              <Rocket className='h-8 w-8 text-accent-orange hover:text-wh-300' />
            </button>
          </div>
        </div>
      )}

      <div className={
        isEditable
          ? 'border-2 dark:bg-wh-500 border-accent-orange rounded-md bg-wh-50 p-3'
          : 'w-full max-w-full'}>
        {isEditable && (
          <>
          <EditorMenuBar editor={editor} />
          <hr className='border-1 border-black/10 mt-2 mb-5 dark:border-wh-10'/>
          </>
        )}
          <EditorContent editor={editor} />
      </div>
      {typeof contentError === 'string' && <p className='mt-1 text-wh-900'>{contentError}</p>}
    </article>
  )
}

export default Articule
