import { type SectionProps } from '@/lib/types'
import { TrendingCard } from '../(shared)/TrendingCards'

const Trending = ({ posts }: SectionProps) => {
  return (
    <section className='pt-3 pb-8 space-y-4'>
      <div className='flex items-center gap-2'>
        <div className='uppercase bg-accent-orange py-2 px-8 text-wh-900 font-bold mr-2'>trending
        </div>
        <p className='text-sm'>From Explosive Knockouts to Dominant Wins, Explore the Latest Trends Shaping the Pulse-Pounding World of Combat Athletics. Get Hooked on Action!</p>
      </div>

       {/* Grid Articules */}
       <div className='sm:grid gap-4 grid-cols-4 grid-rows-2 sm:h-[500px] my-2'>
         <TrendingCard className='col-span-2 row-span-2 bg-wh-500' post={posts[0]} withTitle />
         <TrendingCard className='col-span-2 row-span-1 bg-wh-500' post={posts[1]} withTitle />
         <TrendingCard className='col-span-1 row-span-1 bg-wh-500' post={posts[2]} withTitle/>
         <TrendingCard className='col-span-1 row-span-1 bg-wh-500' post={posts[3]} withTitle/>
      </div>
    </section>
  )
}

export default Trending
