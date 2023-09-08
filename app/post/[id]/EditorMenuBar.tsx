import { type EditorMenuBarProps } from '@/lib/types'
import React from 'react'

const EditorMenuBar = ({ editor }: EditorMenuBarProps) => {
  if (editor === null) {
    return null
  }

  return (
    <div className='flex justify-between items-center dark:bg-wh-500'>
      <div className='flex items-center gap-4'>
        <button
          type='button'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          H<span className='text-xs'>1</span>
        </button>
        <button
          type='button'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          H<span className='text-xs'>2</span>
        </button>
        <button
          type='button'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          H<span className='text-xs'>3</span>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive('paragraph')
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          paragraph
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          <b>B</b>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-accent-orange text-wh-50 dark:text-wh-900 p-1 rounded-md'
              : 'p-1 dark:text-wh-50'
          }
        >
          <i>I</i>
        </button>
      </div>
    </div>
  )
}

export default EditorMenuBar
