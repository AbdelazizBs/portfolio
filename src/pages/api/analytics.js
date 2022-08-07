import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async (req, res) => {
  const { fl } = req.body
  const ip = fl.slice(fl.indexOf('ip=') + 3, fl.indexOf('ts')).trim()

  const exist = await prisma.IPs.findMany({
    where: {
      ip
    }
  })


  if (exist.length > 0) {
    try {
      await prisma.IPs.update({
        where: {
          id: exist[0].id
        },
        data: {
          count: exist[0].count + 1
        }
      })
    } catch (e) {
      console.log(e)
    }
  } else {
    try {
      await prisma.IPs.create({
        data: {
          ip,
          count: 1
        }
      })
    } catch (e) {
      console.log(e)
    }
  }


  res.status(200).json({
    success: true
  })

}
