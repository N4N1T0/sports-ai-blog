import { prisma } from '@/app/api/client'

const subscribers = [
  {
    email: 'adrianalvarezalonso1991@gamil.com',
    verifiedEmail: true
  },
  {
    email: 'dayana.abuinr@gmail.com',
    verifiedEmail: true
  },
  {
    email: 'test@gamil.com',
    verifiedEmail: false
  }
]

async function main () {
  console.log('Start Seeding')
  for (const subscriber of subscribers) {
    await prisma.subscriber.create({ data: subscriber })
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
