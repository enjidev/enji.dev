import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Hardcode thẳng vào đây, không qua biến môi trường, không qua schema luôn!
export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: "mongodb://admin:33015676e4aac2d25b57478da17613822ada39e1@10.0.0.74:27017/portfolio?authSource=admin"
    }
  }
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;