import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// ÉP BUỘC dùng link Atlas, không thèm đọc .env luôn cho khỏi lỗi!
const cloudConnectionString = "mongodb+srv://thdangduy_db_user:r0FieCxI7zljQmRf@mongodb.mqoiwug.mongodb.net/portfolio?retryWrites=true&w=majority&appName=mongodb";

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: cloudConnectionString,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;