import { PrismaClient } from '@prisma/client'

const globalForPrisma = global

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma


// This code initializes Prisma and makes sure it’s optimized Prisma when we run in development mode with Next.js.
// Now in any file you want to use Prisma, you can use this syntax:
// import prisma from 'lib/prisma'
// and Next.js will automatically find it.