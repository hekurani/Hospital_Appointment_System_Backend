import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UsersService, PrismaService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
