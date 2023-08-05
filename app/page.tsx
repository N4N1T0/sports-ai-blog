import Trending from 'app/(home)/Trending'
import Mma from 'app/(home)/Mma'
import Boxing from 'app/(home)/Boxing'
import Fitness from 'app/(shared)/Fitness'
import Subscribe from '@/app/(shared)/Subscribe'
import Sidebar from 'app/(shared)/Sidebar'

export default function Home() {
  return (
    <main className="px-8 leading-5">
      <Trending />
      <div className="md:flex gap-7 mb-5">
        <div className="basis-3/4">
          <Mma />
          <Boxing />
          <Fitness />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
