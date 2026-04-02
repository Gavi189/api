import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@email.com',
    },
  });
}

main()
  .then(() => console.log('Seed'))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
