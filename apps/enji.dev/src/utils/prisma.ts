import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Ép Prisma phải đọc trực tiếp chuỗi kết nối này nếu biến môi trường bị hụt
const dbUrl = "mongodb://admin:33015676e4aac2d25b57478da17613822ada39e1@10.0.0.74:27017/portfolio?authSource=admin";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
