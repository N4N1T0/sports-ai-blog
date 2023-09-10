import { type AboutInfoProps } from '@/lib/types'

function AboutInfo ({ title, subtitle, text }: AboutInfoProps) {
  return (
    <section>
       <hr className='border-1 border-black/10 dark:border-wh-10 mt-16'/>
      {/* Header */}

      <div className='flex items-center gap-2 my-6'>
        <h4 className='bg-accent-orange py-2 px-4 text-wh-900 text-sm font-bold uppercase mr-2'>{title}</h4>
        <p className='font-bold text-2xl'>{subtitle}</p>
      </div>

      <p className='md:mb-7 mb-3 leading-6'>{text}</p>
    </section>
  )
}

export default AboutInfo
