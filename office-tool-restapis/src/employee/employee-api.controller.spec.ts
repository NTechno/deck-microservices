import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeApiController } from './employee-api.controller';
import { EmployeeApiService } from './employee-api.service';

describe('EmployeeApiController', () => {
  let controller: EmployeeApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeApiController],
      providers: [EmployeeApiService],
    }).compile();

    controller = module.get<EmployeeApiController>(EmployeeApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
