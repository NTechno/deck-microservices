import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { EmailHandlerService } from 'src/common/service/email-handler/email-handler.service';
import { EmployeeApiService } from 'src/employee/employee-api.service';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDTO } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  @Inject(EmailHandlerService)
  private readonly emailHandlerService: EmailHandlerService;
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(EmployeeApiService)
  private readonly employeeService: EmployeeApiService;

  @Post('register')
  async register(@Body() RegisterDto: RegisterDTO) {
    console.log('register employee');
    let employee = await this.employeeService.create(RegisterDto);
    return employee;
  }

  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    let userData = await this.employeeService.findOne('email', LoginDto.email);
    console.log('inot the login', LoginDto, 'userdata::::::', userData);
    if (!userData) {
      throw new UnauthorizedException();
    }
    return this.authService.login(LoginDto, userData);
  }

  @Post('logout')
  async logout(@Body() LoginDto: LoginDto) {
    return 'user successfully logged out!!!';
  }

  @Post('forgetpassword')
  async forgetPassword(@Body() Email: string) {
    console.log('forgot password!!', Email);
    let detail = await this.emailHandlerService.sendEmail(Email);
    console.log('email handler', detail);
    return detail;
  }
}
