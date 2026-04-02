import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // 👉 rota: /users
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
