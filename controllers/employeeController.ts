import { EmployeesService } from '@/services/employeesService';
import { Employees } from '@/models/employees';

const employeesService = new EmployeesService();

export class EmployeesController {
  getAllEmployees = async (): Promise<Employees[]> => {
    try {
      const employees = await employeesService.getAllEmployees();
      return employees;
    } catch (error) {
      console.error('Error getting Employees:', error);
      throw error;
    }
  };
}
