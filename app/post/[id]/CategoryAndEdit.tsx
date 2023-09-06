import { type FormattedPost } from 'app/type'
import { type Editor } from '@tiptap/react'
import React from 'react'
import { X, PencilLine } from 'lucide-react'
import { getCsrfToken } from 'next-auth/react'

interface Props {
  isEditable: boolean
  handleIsEditable: (isEditable: boolean) => void
  title: string | undefined
  setTitle: (title: string) => void
  tempTitle: string | undefined
  setTempTitle: (tempTitle: string) => void
  tempContent: string | undefined
  setTempContent: (tempContent: string) => void
  editor: Editor | null
  post: FormattedPost | null
}

const CategoryAndEdit = async ({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post
}: Props) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable)
    setTempTitle(title ?? '')
    setTempContent(editor?.getHTML() ?? 'ca')
  }

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable)
    setTitle(tempTitle ?? '')
    editor?.commands.setContent(tempContent ?? '')
  }

  const csrfToken = await getCsrfToken()

  return (
    <div className='flex-between'>
      <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold'>{post?.category}</h4>
      {csrfToken !== null &&
        <div className='mt-3'>
          {isEditable
            ? (
              <div className='flex-between gap-2'>
                <button onClick={handleCancelEdit}>
                  <X className='h-6 w-6 text-accent-orange' />
                </button>
              </div>
              )
            : (
                <button onClick={handleEnableEdit}>
                <PencilLine className='h-6 w-6 text-accent-orange' />
              </button>
              )}
        </div>
      }
    </div>
  )
}

export default CategoryAndEdit
