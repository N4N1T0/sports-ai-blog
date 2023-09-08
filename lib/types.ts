import { type Post } from '@prisma/client'
import { type Editor } from '@tiptap/react'
import { type FormattedPost } from 'app/type'

export interface User {
  id: number
  name: string
}

export interface SectionProps {
  posts: Post[]
}

export interface TrendingCardsProps {
  className?: string
  post: Post
}

export interface CardProps {
  className?: string
  post: Post
  imageHeight: string
  isSmallCard?: boolean
  isLongForm?: boolean
}

export interface FitnessProps {
  posts: Post[]
  title: string
  subTitle: string
  withLine?: boolean
}

export interface SocialLinksProps {
  isDark?: string
}

export interface PostIdParams {
  params: { id: string }
}

export interface ArticuleProps {
  contentError: string
  editor: Editor | null
  isEditable: boolean
  setContent: (content: string) => void
  title: string | undefined
}

export interface CategoryAndEditProps {
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

export interface ContentProps {
  post: FormattedPost | null
}

export interface EditorMenuBarProps {
  editor: Editor | null
}

export interface PostPageProps {
  params: { id: string }
}
