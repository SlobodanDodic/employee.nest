import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
// import { Employee } from '../schema/employee.schema';
import { CreateEmployeeDto } from './create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly EmployeeService: EmployeeService) {}

  @UseGuards(JwtGuard)
  @Post()
  async createEmployee(
    @Res() response,
    @Body() employee: CreateEmployeeDto,
  ): Promise<any> {
    const newEmployee = await this.EmployeeService.create(employee);
    return response.status(HttpStatus.CREATED).json({
      newEmployee,
    });
  }

  @UseGuards(JwtGuard)
  @Get()
  async fetchAll(@Res() response): Promise<any> {
    const employees = await this.EmployeeService.readAll();
    return response.status(HttpStatus.OK).json({
      employees,
    });
  }

  @UseGuards(JwtGuard)
  @Get('/:id')
  async findById(@Res() response, @Param('id') id: string): Promise<any> {
    const employee = await this.EmployeeService.readById(id);
    return response.status(HttpStatus.OK).json({
      employee,
    });
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() employee: CreateEmployeeDto,
  ): Promise<any> {
    const updatedEmployee = await this.EmployeeService.update(id, employee);
    return response.status(HttpStatus.OK).json({
      updatedEmployee,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id: string): Promise<any> {
    const deletedEmployee = await this.EmployeeService.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedEmployee,
    });
  }
}
