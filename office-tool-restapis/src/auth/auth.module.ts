import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeeApiService } from 'src/employee/employee-api.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './auth.schema';
import { EmployeeApiModule } from 'src/employee/employee-api.module';
import { JwtModule } from '@nestjs/jwt';
import { authConst } from './constant/auth.constant';
import { EmailHandlerService } from 'src/common/service/email-handler/email-handler.service';

@Module({
  imports: [
    EmployeeApiModule,
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    JwtModule.register({
      secret: authConst.secret,
      global: true,
      signOptions: { expiresIn: authConst.tokenExpiery },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService , EmailHandlerService],
  exports: [AuthService],
})
export class AuthModule {}
