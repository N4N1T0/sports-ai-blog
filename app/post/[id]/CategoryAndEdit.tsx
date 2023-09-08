import React from 'react'
import { X, PencilLine } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { type CategoryAndEditProps } from '@/lib/types'

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
}: CategoryAndEditProps) => {
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

  const { status } = useSession()

  // console.log(`the status is ${status}`)

  return (
    <div className='flex-between'>
      <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold'>{post?.category}</h4>
      {status === 'authenticated' &&
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
