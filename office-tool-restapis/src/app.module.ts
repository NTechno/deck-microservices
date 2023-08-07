import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeApiModule } from './employee/employee-api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: false,
        auth: {          
          user: 'apikey',
          pass:'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',
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/office-tool'),
    EmployeeApiModule,
    ProjectModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
