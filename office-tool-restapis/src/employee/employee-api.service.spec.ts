import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeApiService } from './employee-api.service';

describe('EmployeeApiService', () => {
  let service: EmployeeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeApiService],
    }).compile();

    service = module.get<EmployeeApiService>(EmployeeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
