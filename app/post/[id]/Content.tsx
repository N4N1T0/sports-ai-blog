'use client'

import React, { useState } from 'react'
import { type FormattedPost } from 'app/type'
import Image from 'next/image'
import SocialLinks from '@/app/(shared)/SocialLinks'
import { useTheme } from 'next-themes'
import { useEditor, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import CategoryAndEdit from './CategoryAndEdit'
import Articule from './Articule'

interface Props {
  post: FormattedPost | null
}

function Content ({ post }: Props) {
  // Use States
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [title, setTitle] = useState<string | undefined>(post?.title)
  const [tempTitle, setTempTitle] = useState(title)
  const [titleError, setTitleError] = useState<string>('')
  const [content, setContent] = useState<string | undefined>(post?.content)
  const [tempContent, setTempContent] = useState(content)
  const [contentError, setContentError] = useState<string>('')

  // Date
  let formattedDate = ''
  if (typeof post?.createdAt === 'string') {
    const date = new Date(post.createdAt)
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as any
    formattedDate = date.toLocaleDateString('en-US', options)
  }

  // Handle functions
  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool)
    editor?.setEditable(bool)
  }
  const handelUpdate = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError('')
    setContent((editor as Editor).getHTML())
  }
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title !== null && title !== undefined) {
      setTitleError('')
      setTitle(e.target.value)
    }
  }

  // TipTap Editor Core
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handelUpdate,
    content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class: 'prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full'
      }
    }
  })

  // Submit Function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (title === '') setTitleError('This field is required')
    if (editor?.isEmpty === true) setContentError('This field is required')
    if (title === '' || editor?.isEmpty === true) return

    // Fetch to the Back
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content
        })
      }
    )

    const data = await response.json()

    handleIsEditable(false)
    setTempTitle('')
    setTempContent('')

    setTitle(data.title)
    setContent(data.content)
    editor?.commands.setContent(data.content)
  }

  // Theme Toogle
  const { theme } = useTheme()

  return (
    <div className='prose w-full max-w-full mb-8'>
      <h5 className='text-wh-300'>{`Home > ${post?.category} > ${post?.title}`}</h5>

      {/* Category and Edit */}
      <CategoryAndEdit
       isEditable={isEditable}
       handleIsEditable={handleIsEditable}
       title={title}
       setTitle={setTitle}
       tempTitle={tempTitle}
       setTempTitle={setTempTitle}
       tempContent={tempContent}
       setTempContent={setTempContent}
       editor={editor}
       post={post}
      />

      <form onSubmit={handleSubmit}>
        {/* Header */}
        <>
        {isEditable
          ? (
          <div>
            <textarea
              className='border-2 rounded-md bg-wh-50 w-full'
              placeholder='Title'
              onChange={handleTitle}
              value={title}
            />
             {typeof titleError === 'string' && <p className='mt-1 text-wh-500'>{titleError}</p>}
          </div>
            )
          : (
          <h3 className='font-bold text-3xl mt-3'>{title}</h3>
            )}
        <div className='flex gap-2'>
          <h5 className='font-semibold text-xs'>By {post?.author}</h5>
          <h6 className='text-wh-300 text-sm'>{formattedDate}</h6>
        </div>
        </>

        {/* Image */}
        <div className='relative w-auto mt-1 mb-16 h-96'>
          {post?.image ?? (
            <Image
              fill
              alt={title ?? 'Article Image'}
              src={post?.image ?? ''}
              sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 85vw,
                    (max-width: 1060px) 75vw,
                    70vw"
              style={{ objectFit: 'cover' }}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
            />
          )}
        </div>

          {/* Content */}
        <Articule
          contentError={contentError}
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          title={title}
        />

        {/* Submit */}
        {isEditable && (
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold mt-4 py-2 px-4 uppercase'>
                Submit
            </button>
          </div>
        )}
      </form>

      <div className='hidden md:block mt-8 w-1/3'>
          <SocialLinks isDark={theme} />
      </div>
    </div>
  )
}

export default Content
