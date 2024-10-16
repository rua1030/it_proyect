'use client';

import React, {
  createContext, useState, useContext, ReactNode,
  useEffect,
} from 'react';
import { EmployeesService } from '@/services/employeesService';
import { Employees } from '@/models/employees';

// interface Employee {
//   id: number; // remover
//   name: string;
//   email: string;
//   idNumber: string;
//   jobTitle: string;
//   operatingSystem: string;
//   status: string;
// }

// const initialEmployees: Employees[] = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john@example.com',
//     idNumber: '1234567890',
//     jobTitle: 'Developer',
//     operatingSystem: 'Windows',
//     status: 'Onbording',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     email: 'jane@example.com',
//     idNumber: '0987654321',
//     jobTitle: 'Designer',
//     operatingSystem: 'macOS',
//     status: 'Active',
//   },
//   {
//     id: '3',
//     name: 'Bob Johnson',
//     email: 'bob@example.com',
//     idNumber: '2345678901',
//     jobTitle: 'Manager',
//     operatingSystem: 'Linux',
//     status: 'Offbording',
//   },
//   {
//     id: '4',
//     name: 'Alice Brown',
//     email: 'alice@example.com',
//     idNumber: '3456789012',
//     jobTitle: 'HR Specialist',
//     operatingSystem: 'Windows',
//     status: 'Active',
//   },
//   {
//     id: '5',
//     name: 'Charlie Wilson',
//     email: 'charlie@example.com',
//     idNumber: '4567890123',
//     jobTitle: 'Tester',
//     operatingSystem: 'macOS',
//     status: 'Onbording',
//   },
//   {
//     id: '6',
//     name: 'John Doe 2',
//     email: 'john@example.com',
//     idNumber: '1234567890',
//     jobTitle: 'Developer',
//     operatingSystem: 'Windows',
//     status: 'Onbording',
//   },
// ];

const employeesService = new EmployeesService();

const employeeStatuses = ['Onbording', 'Active', 'Offboarding'];
const operatingSystems = ['Windows', 'macOS', 'Linux'];

interface SupplyContextProps {
  statusSystems: typeof operatingSystems;
  status: typeof employeeStatuses;
  employees: typeof EmployeesService;
  filter: string;
  addEmployee: () => void;
  editEmployee: (id: number) => void;
  deleteEmployee: () => void;
  confirmDelete: (employee: Employees) => void;
  modalAdd: () => void;
  changeStatus: (id: number, newStatus: string) => void;
  changeOS: (id: number, newOS: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  employeeToDelete: Employees | null;
  setEmployeeToDelete: React.Dispatch<React.SetStateAction<string>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;

  changePage: (pageNumber: number) => void;
  currentPage: number;

  currentEmployees: Employees[];
  filteredEmployees: Employees[];

  employeesPerPage: number;
}
const SupplyContext = createContext<SupplyContextProps | undefined>(undefined);

export function SupplyProviderEmployees({ children }: { children: ReactNode }) {
  const [status] = useState(employeeStatuses);
  const [statusSystems] = useState(operatingSystems);
  const [employees, setEmployees] = useState<Employees[]>([]);
  const [filter, setFilter] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const fetchEmployees = async () => {
    try {
      const fetchedEmployees = await employeesService.getAllEmployees();
      setEmployees(fetchedEmployees);
    } catch (error) {
      console.error('Error fetching Employees:', error);
    }
  }; 

  // Simulate accion an employee
  const addEmployee = () => {
    console.log('Add employee');
  };

  const editEmployee = (id: number) => {
    console.log('Edit employee', id);
  };

  const confirmDelete = (employee: string) => {
    setEmployeeToDelete(employee);
    setDeleteModal(true);
  };

  const modalAdd = () => {
    setAddModal(true);
  };
  // const setAddEmployees = () => {
  //   console.log('Add employee');
  //   setAddEmployees();
  //   setAddModal(false);
  // };

  const deleteEmployee = () => {
    if (employeeToDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== employeeToDelete.id),
      );
      setDeleteModal(false);
      setEmployeeToDelete(null);
    }
  };

  const changeStatus = (id: number, newStatus: string) => {
    setEmployees(
      employees.map((employee) => (employee.id === id
        ? { ...employee, status: newStatus } : employee)),
    );
  };

  const changeOS = (id: number, newOS: string) => {
    setEmployees(
      employees.map((employee) => (employee.id === id
        ? { ...employee, operatingSystem: newOS } : employee)),
    );
  };

  const filteredEmployees = employees.filter(
    (employee) => employee.name.toLowerCase().includes(filter.toLowerCase())
      || employee.email.toLowerCase().includes(filter.toLowerCase())
      || employee.idNumber.includes(filter)
      || employee.jobTitle.toLowerCase().includes(filter.toLowerCase())
      || employee.operatingSystem.toLowerCase().includes(filter.toLowerCase()),
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee,
  );

  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <SupplyContext.Provider
      value={{
        employees,
        filter,
        addEmployee,
        editEmployee,
        deleteEmployee,
        confirmDelete,
        modalAdd,
        changeStatus,
        setFilter,
        deleteModal,
        setDeleteModal,
        addModal,
        setAddModal,
        changeOS,
        statusSystems,
        status,
        employeeToDelete,
        setEmployeeToDelete,
        changePage,
        currentPage,
        currentEmployees,
        filteredEmployees,
        employeesPerPage,
      }}
    >
      {children}
    </SupplyContext.Provider>
  );
}
export const useSupplyContext = () => {
  const context = useContext(SupplyContext);
  if (!context) {
    throw new Error('useSupplyContext must be used within a SupplyProvider');
  }
  return context;
};
