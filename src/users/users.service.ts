import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create() {
    return this.prisma.user.create({
      data: {
        name: 'Gabriel',
        email: 'gabriel@email.com',
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
