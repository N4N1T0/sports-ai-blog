import Card from './Card'
import { type OtherProps } from '@/lib/types'

const OtherPosts = ({ posts, title, subTitle, withLine = false }: OtherProps) => {
  return (
    <section className='pt-1 mb-10'>
      {withLine && <hr className='border-1 border-black/10 dark:border-wh-10 mr-2'/>}

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase'>{title}</h4>
        <p className='font-bold md:text-2xl text-xl'>{subTitle}</p>
      </div>

      {/* Section */}
      <div className='sm:grid grid-cols-2 gap-6'>
        {posts.map(item => (
          <Card
          key={item.id}
          className='mt-4 sm:mt-0'
          imageHeight='h-80'
          post={item}
          />
        ))}
      </div>
    </section>
  )
}

export default OtherPosts
