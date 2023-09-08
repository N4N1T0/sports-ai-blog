import { PrismaClient } from '@prisma/client'

const prisma: any = new PrismaClient()

const authors = [
  {
    name: 'Adrin "Nano" Alvarez',
    bio: 'Striking Coach with more than 10 years of experience',
    image: 'https://res.cloudinary.com/dkvoatzeq/image/upload/v1694183461/ai-sports-blog/1_rthkte.jpg'
  },
  {
    name: 'Dayana "Good Day" Abuin ',
    bio: 'Taekwondo Black Belt with more than 5 years of sports journalism',
    image: 'https://res.cloudinary.com/dkvoatzeq/image/upload/v1694183658/ai-sports-blog/WhatsApp_Image_2023-03-02_at_6.08.10_PM_ffoeyd.jpg'
  }

]

async function main () {
  console.log('Start Seeding')
  for (const author of authors) {
    await prisma.author.create({ data: author })
  }
  console.log('Seeding Finished')
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.log(e)
  await prisma.$disconnect()
  process.exit(1)
})
