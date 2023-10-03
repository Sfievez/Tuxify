import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from "process";
import { GroupService } from './group/group.service';
import { GroupController } from './group/group.controller';
import { GroupModule } from './group/group.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { EmailVerificationController } from './emailVerification/emailVerification.controller';
import { EmailVerificationModule } from './emailVerification/emailVerification.module';
import { ResetPasswordController } from './resetPassword/resetPassword.controller';
import { ResetPasswordModule } from './resetPassword/resetPassword.module';
import {AuthToken} from "./auth/auth.entity";
import {User} from "./user/user.entity";
import {ResetPassword} from "./resetPassword/resetPassword.entity";
import {EmailVerification} from "./emailVerification/emailVerification.entity";
@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
          imports: undefined,
            useFactory: () => ({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT, 10),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                synchronize: true,
                entities: [AuthToken, User, ResetPassword, EmailVerification],
            }),
      }),
      GroupModule,
      UserModule,
      EmailVerificationModule,
      ResetPasswordModule,
  ],
  controllers: [GroupController, UserController, EmailVerificationController, ResetPasswordController],
  providers: [GroupService],
})
export class AppModule {}
