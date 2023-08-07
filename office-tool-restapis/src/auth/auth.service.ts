import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeApiDto } from 'src/employee/dto/create-employee-api.dto';
import { EmployeeApiService } from 'src/employee/employee-api.service';
import { AuthSaveDto, LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { timeStamp } from 'console';
import { Auth } from './auth.schema';
import mongoose, { Model } from 'mongoose';
import { EmailHandlerService } from 'src/common/service/email-handler/email-handler.service';

@Injectable()
export class AuthService {
  // constructor(private employeeApiService: EmployeeApiService) {}
  @InjectModel(Auth.name) private authModel: Model<Auth>;

  @Inject(EmployeeApiService)
  private employeeApiService: EmployeeApiService;

  @Inject(JwtService)
  private jwtService: JwtService;

  @Inject(EmailHandlerService) private emailHandlerService: EmailHandlerService;

  async login(LoginDto: LoginDto, userData: any) {
    let payload = { email: LoginDto.email };
    let data = await this.jwtService.signAsync(payload);
    userData = { user: userData[0], token: data };
    console.log('user data', userData);

    try {
      let obj: AuthSaveDto = {
        empId: new mongoose.Types.ObjectId(userData.user._id),
        accessToken: data,
        inuse: true,
        isDeleted: false,
      };
      console.log('auth token save!', obj);
      let dataToSent = await new this.authModel(obj);
      dataToSent.save();
      console.log('into the save', dataToSent);
      return userData;
    } catch (error) {
      console.log('error occure!!', error);
      return error;
    }
  }

  async forgetPassword(email: string) {
    console.log('send email', email);
    try {
      let response = await this.emailHandlerService.sendEmail(email);
      console.log('into the send email!!', email, response);
    } catch (error) {
      console.log('error :::', error);
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
