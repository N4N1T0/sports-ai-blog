import { PrismaClient } from '@prisma/client'

const prisma: any = new PrismaClient()

const users = [
  {
    user: 'Nano',
    password: 'Nan0123'
  },
  {
    user: 'Guest',
    password: 'G123'
  }

]

async function main () {
  console.log('Start Seeding')
  for (const user of users) {
    await prisma.user.create({ data: user })
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
