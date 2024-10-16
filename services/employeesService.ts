import axiosInstance from '@/routes/axiosInstance';
import { Employees } from '@/models/employees';
import apiRoutes from '@/routes/routes';

export class EmployeesService {
  getAllEmployees = async (): Promise<Employees[]> => {
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get(apiRoutes.list, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Employeea: ${error}`);
    }
  };

  createEmployee = async (newEmployee: Employees): Promise<Employees> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axiosInstance.post(apiRoutes.create, newEmployee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Error creating Employee';
      throw new Error(`Error creating Employee: ${errorMessage}`);
    }
  };
  updateEmployee = async (
    employeeId: string,
    updatedEmployee: Employees
  ): Promise<Employees> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axiosInstance.put(
        `${apiRoutes.update}/${employeeId}`,
        updatedEmployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Error updating Employee';
      throw new Error(`Error updating Employee: ${errorMessage}`);
    }
  };
  
}
