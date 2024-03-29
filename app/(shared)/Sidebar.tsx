import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from '@/public/assets/ad-2.png'
import { type SidebarProps } from '@/lib/types'

const Sidebar = ({ name, image, bio, page }: SidebarProps) => {
  // Generating content acording page props
  const generatingContent = (page: string) => {
    switch (page) {
      case 'intro':
        return (<>
                <h4 className='bg-accent-orange py-3 px-5 text-wh-900 text-xs font-bold text-center'>
                About the Blog
                </h4>
                <div className='w-full flex flex-col justify-center items-center py-5 space-y-5'>
                <h4 className='font-bold text-xl'>Striking Gold</h4>
                <p className='leading-6'>Welcome to Striking Gold, your ultimate destination for all things combat sports, with a specialized focus on the thrilling world of Mixed Martial Arts (MMA). We are more than just a blog; we are a passionate community of fight enthusiasts, dedicated to bringing you the latest news, insightful analysis, and captivating stories from the front lines of combat sports.</p>
                </div>
              </>)
      case 'post':
        return (<>
                <h4 className='bg-accent-orange py-3 px-5 text-wh-900 text-xs font-bold text-center'>
                About the Blog
                </h4>
                <div className='flex flex-col justify-center mt-7'>
                <Image
                  alt='about-profile'
                  src={image ?? '' }
                  width={500}
                  height={500}
                  style={{ width: '500px', height: '250px', objectFit: 'cover' }}
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
                />
                  <h4 className='py-3 px-5 text-wh-500 dark:text-wh-100 font-bold text-center'>
                  {name}
                </h4>
                <p className='text-wh-500 dark:text-wh-100 text-sm text-left'>
                  {bio}
                </p>
                </div>
                </>)
      case 'about':
        return (<></>)
    }
  }

  return (
    <section>
      <h4 className='py-3 px-5 text-wh-900 text-xs font-bold text-center bg-accent-orange mb-10 sm:mb-0'>
        Subscribe and Follow
      </h4>
      <div className='my-5 mx-5'>
        <SocialLinks />
      </div>
      <Subscribe />
      <Image
        className='hidden md:block my-8 w-full'
        alt='advert-2'
        src={Ad2}
        width={500}
        height={1000}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+R8AApcByuTu2nIAAAAASUVORK5CYII'
      />
      {generatingContent(page)}
    </section>
  )
}

export default Sidebar
