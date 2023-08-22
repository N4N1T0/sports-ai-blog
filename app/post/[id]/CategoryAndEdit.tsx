import { type FormattedPost } from 'app/type'
import { type Editor } from '@tiptap/react'
import React from 'react'
import { X, PencilLine } from 'lucide-react'

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

const CategoryAndEdit = ({
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
    setTempContent(editor?.getHTML() || '')
  }

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable)
    setTitle(tempTitle ?? '')
    editor?.commands.setContent(tempContent ?? '')
  }

  return (
    <div className='flex-between'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold'>{post?.category}</h4>
        <div className='mt-3'>
          {isEditable
            ? (
            <div className='flex-between gap-2'>
              <button onClick={handleCancelEdit}>
                <X className='h-6 w-6 text-accent-red'/>
              </button>
            </div>
              )
            : (
            <button onClick={handleEnableEdit}>
                <PencilLine className='h-6 w-6 text-accent-red'/>
              </button>
              )}
        </div>
      </div>
  )
}

export default CategoryAndEdit
