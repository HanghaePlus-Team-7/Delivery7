import { Module } from "@nestjs/common";

import { UserService } from "./service/user.service";
import { UserController } from "./user.controller";
import { PrismaService } from "../../prisma/prisma.service";
import { UserRepository } from "./user.repository";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
