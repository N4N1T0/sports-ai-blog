import AboutCard from '../(shared)/AboutCard'
import AboutInfo from '../(shared)/AboutInfo'
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
          <p className='leading-6'>Welcome to Striking Gold, your ultimate destination for all things combat sports, with a specialized focus on the thrilling world of Mixed Martial Arts (MMA). We are more than just a blog; we are a passionate community of fight enthusiasts, dedicated to bringing you the latest news, insightful analysis, and captivating stories from the front lines of combat sports.</p>
          {authors.map((author) => (
            <AboutCard key={author.id} author={author} posts={author.posts} />
          ))}
          <AboutInfo title='Our Mission' text='At Striking Gold, our mission is clear: to provide you with the most comprehensive, engaging, and expertly-crafted content about MMA and combat sports. We are driven by our love for the sport and our commitment to delivering high-quality articles that cater to both the seasoned fight fan and the curious newcomer. Our team of dedicated writers and editors is passionate about sharing their in-depth knowledge of MMA and combat sports with you. We believe that every punch, every submission, and every fighter&apos;s journey is a story worth telling. Whether you&apos;re a die-hard fan who never misses a fight night or someone who&apos;s just starting to explore the world of combat sports, Striking Gold is your go-to source for insightful analysis, event coverage, and fighter profiles that bridge the gap between the seasoned enthusiast and the newcomer. We understand that combat sports are not just about what happens inside the cage but also the culture, the discipline, and the indomitable spirit of the athletes. Our blog explores these facets, offering a holistic view of the MMA and combat sports ecosystem.' />
          <AboutInfo title='What We Offer' text='Fight Analysis: Dive deep into our expert analysis of MMA bouts, breaking down the strategies, techniques, and moments that make each fight unforgettable.Fighter Profiles: Get to know your favorite fighters and rising stars. Discover their journeys, training regimens, and what makes them tick both inside and outside the cage. Event Previews and Reviews: Stay up-to-date with previews of upcoming fight cards and in-depth reviews of past events. We&apos;ll keep you informed about all the must-watch fights on the horizon. MMA Culture: Explore the unique culture of MMA and combat sports, from the rich history to the vibrant fan community that surrounds it. Interviews: We&apos;re dedicated to bringing you exclusive interviews with fighters, coaches, and other influential figures in the world of combat sports.' />
        </div>
        <div className='basis-1/4 md:mt-8 mt-2'>
          <Sidebar page='about' />
         </div>
      </div>
    </main>
  )
}

export default AboutPage
