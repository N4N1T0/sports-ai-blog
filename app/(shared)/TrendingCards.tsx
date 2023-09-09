import { type TrendingCardsProps } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

export const TrendingCard = ({ className, post, withTitle = false }: TrendingCardsProps) => {
  return (
    <Link
     className={`${className} sm:mt-0 sm:h-auto relative mt-5 block w-full h-96 hover:opacity-70 transition-all duration-200`}
     href={`/post/${post?.id}`}
    >
      <div className='z-0 relative w-full h-full'>
        <Image
          fill
          sizes='(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          alt={post?.title}
          style={{ objectFit: 'cover' }}
          src={post?.image}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
      </div>
      <div className='absolute z-1 w-full h-full inset-0 bg-gradient-gradual' />
      <div className='absolute z-2 bottom-0 left-0 p-3'>
         <h4 className='inline-block px-4 py-1 font-semibold bg-accent-orange text-wh-900'>{post?.category}</h4>
         {withTitle && <div className='text-wh-100 mt-1'>{post?.title}</div>}
      </div>
    </Link>
  )
}
