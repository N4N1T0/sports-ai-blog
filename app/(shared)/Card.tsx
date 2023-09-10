import { type CardProps } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({
  className,
  imageHeight,
  post,
  isSmallCard = false,
  isLongForm = false
}: CardProps) => {
  const { id, title, author, createdAt, image, snippet } = post

  const date = new Date(createdAt)
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any
  const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <div className={className}>
      {/* Image Section */}
      <Link
        className='basis-full hover:opacity-70'
        href={`/post/${id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            alt='tech'
            src={image}
            sizes='(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw'
            style={{ objectFit: 'cover' }}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
          />
        </div>
      </Link>

      {/* Text Section */}
      <div className={`${isSmallCard ? 'ml-5' : ''} basis-full`}>
        <Link href={`/post/${id}`}>
          <h4
            className={`font-bold hover:text-accent-orange
            ${isSmallCard ? 'text-base' : 'text-lg'}
            ${isSmallCard ? 'line-clamp-2' : ''}
          `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
          <h5 className='font-semibold text-xs'>{author?.name}</h5>
          <h6 className='text-accent-orange text-xs'>{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-500 dark:text-wh-100 ${
            isLongForm ? 'line-clamp-5' : 'line-clamp-3'
          }`}
        >
          {snippet}
        </p>
      </div>
    </div>
  )
}

export default Card
