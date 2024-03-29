import Card from 'app/(shared)/Card'
import { type SectionProps } from '@/lib/types'

const Boxing = ({ posts }: SectionProps) => {
  return (
    <section className='mt-10'>
      <hr className='border-1 border-black/10 dark:border-wh-10'/>

      {/* Header */}
      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase mr-2'>Boxing</h4>
        <p className='font-bold text-2xl'>Latest in Boxing</p>
      </div>

      {/* Section */}
      <div className='sm:flex justify-between gap-6'>
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[0]}
        />
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[1]}
        />
        <Card
          className='basis-1/3 mt-4 sm:mt-0'
          imageHeight='h-80'
          post={posts[2]}
        />
      </div>
      <Card
        className='sm:flex justify-between items-center gap-5 mt-6 mb-4'
        imageHeight='h-80'
        post={posts[3]}
        />
    </section>
  )
}

export default Boxing
