import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class EmailHandlerService {
  @Inject(MailerService) private mailService: MailerService;
  constructor(){
    console.log("mail service inin!!!");    
  }

  async sendEmail(email: string) {
    console.log('sending email from nest app!!');
    try {
      console.log('into the send email');
      var response = await this.mailService.sendMail({
        to: email,
        from: 'techdev.nidhi@gmail.com',
        subject: 'welcome onboard',
        text: 'Welcome to new world of office tool!!',
        html:"<b>Welcome to new world of office tool!!</b>"
      });
      console.log("response" , response);      
      return response;
    } catch (error) {
      console.log('error occure in email', error);
      return error;
    }
  }
}
