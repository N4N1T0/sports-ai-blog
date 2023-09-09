import AboutCard from '../(shared)/AboutCard'
import Sidebar from '../(shared)/Sidebar'
import { prisma } from 'app/api/client'

export const revalidate = 120

const getAuthors = async () => {
  const authors = await prisma.author.findMany({
    include: {
      posts: {
        take: 3
      }
    }
  })
  return authors
}

const AboutPage = async () => {
  const authors = await getAuthors()
  return (
     <main className='px-8 leading-5'>
      <div className='md:flex gap-8'>
        <div className='basis-3/4'>
          {/* Header */}
          <div className='flex items-center gap-2 my-6'>
            <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase mr-2'>About Us</h4>
            <p className='font-bold text-2xl'>A little bit a bout our blog and Authors</p>
          </div>
          {authors.map((author) => (
            <AboutCard key={author.id} author={author} posts={author.posts} />
          ))}
        </div>
        <div className='basis-1/4 md:mt-8 mt-2'>
          <Sidebar />
         </div>
      </div>
    </main>
  )
}

export default AboutPage
