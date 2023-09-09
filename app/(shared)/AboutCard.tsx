import { type AuthorCardProps } from '@/lib/types'
import Image from 'next/image'
import { TrendingCard } from './TrendingCards'

function AboutCard ({ author, posts }: AuthorCardProps) {
  return (
    <div className='sm:grid gap-4 grid-cols-5 grid-rows-2 sm:h-[300px] mt-4 mb-20'>
      <div className='relative col-span-2 row-span-2'>
        <Image
          fill
          src={author.image ?? ''}
          alt={author.name ?? 'Author Image'}
          style={{ objectFit: 'cover' }}
          placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
        />
      </div>
      <div className='col-span-3 row-span-1'>
        <div className='font-bold text-2xl mb-2 bg-accent-orange text-wh-900 px-3 py-1 inline-block w-auto'>
          {author.name}
        </div>
        <div className='text-md'>
          {author.bio}
        </div>
      </div>
      <div className='col-span-3 row-span-1 sm:grid gap-2 grid-cols-3 grid-rows-1 my-2'>
        {posts.map((post) => (
          <TrendingCard key={post.id} post={post} className='col-span-1 row-span-1 bg-wh-500'/>
        ))}
      </div>
    </div>
  )
}

export default AboutCard
