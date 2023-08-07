import mongoose from 'mongoose';

export class LoginDto {
  email: string;
  password: string;
}

export class RegisterDTO {
  email: string;
  password: string;
  name: string;
}

export class AuthSaveDto {
  empId: any;
  accessToken: string;
  inuse: boolean;
  isDeleted: boolean;
}
