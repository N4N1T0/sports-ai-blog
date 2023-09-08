import { type Editor } from '@tiptap/react'

export interface User {
  id: number
  name: string
}

export interface SectionProps {
  posts: PostType[]
}

export interface TrendingCardsProps {
  className?: string
  post: PostType
}

export interface CardProps {
  className?: string
  post: PostType
  imageHeight: string
  isSmallCard?: boolean
  isLongForm?: boolean
}

export interface OtherProps {
  posts: PostType[]
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

export interface PostType {
  id: string
  title: string
  category: string
  content: string
  createdAt: Date
  updatedAt: Date
  authorId: string | null
  author: Author | null
  image: string
  snippet: string
}

export interface FormattedPost {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  category: string
  content: string
  authorId: string | null
  author: Author | null
  image: string
  snippet: string
}

export interface Author {
  id?: string | undefined
  name?: string | undefined
  bio?: string | undefined
  image?: string | undefined
}