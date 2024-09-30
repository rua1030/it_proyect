'use client';

import React, {
  createContext, useState, useContext, ReactNode,
} from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
  idNumber: string;
  position: string;
  operatingSystem: string;
  status: string;
}
const initialEmployees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    idNumber: '1234567890',
    position: 'Developer',
    operatingSystem: 'Windows',
    status: 'Onboarding',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    idNumber: '0987654321',
    position: 'Designer',
    operatingSystem: 'macOS',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    idNumber: '2345678901',
    position: 'Manager',
    operatingSystem: 'Linux',
    status: 'Offboarding',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    idNumber: '3456789012',
    position: 'HR Specialist',
    operatingSystem: 'Windows',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    idNumber: '4567890123',
    position: 'Tester',
    operatingSystem: 'macOS',
    status: 'Onboarding',
  },
  {
    id: 6,
    name: 'John Doe 2',
    email: 'john@example.com',
    idNumber: '1234567890',
    position: 'Developer',
    operatingSystem: 'Windows',
    status: 'Onboarding',
  },
  {
    id: 7,
    name: 'Jane Smith 2',
    email: 'jane@example.com',
    idNumber: '0987654321',
    position: 'Designer',
    operatingSystem: 'macOS',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Bob Johnson 2',
    email: 'bob@example.com',
    idNumber: '2345678901',
    position: 'Manager',
    operatingSystem: 'Linux',
    status: 'Offboarding',
  },
  {
    id: 9,
    name: 'Alice Brown 2',
    email: 'alice@example.com',
    idNumber: '3456789012',
    position: 'HR Specialist',
    operatingSystem: 'Windows',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Charlie Wilson 2',
    email: 'charlie@example.com',
    idNumber: '4567890123',
    position: 'Tester',
    operatingSystem: 'macOS',
    status: 'Onboarding',
  },
  {
    id: 11,
    name: 'John Doe 3',
    email: 'john@example.com',
    idNumber: '1234567890',
    position: 'Developer',
    operatingSystem: 'Windows',
    status: 'Onboarding',
  },
  {
    id: 12,
    name: 'Jane Smith 3',
    email: 'jane@example.com',
    idNumber: '0987654321',
    position: 'Designer',
    operatingSystem: 'macOS',
    status: 'Active',
  },
  {
    id: 13,
    name: 'Bob Johnson 3',
    email: 'bob@example.com',
    idNumber: '2345678901',
    position: 'Manager',
    operatingSystem: 'Linux',
    status: 'Offboarding',
  },
  {
    id: 14,
    name: 'Alice Brown 3',
    email: 'alice@example.com',
    idNumber: '3456789012',
    position: 'HR Specialist',
    operatingSystem: 'Windows',
    status: 'Active',
  },
  {
    id: 15,
    name: 'Charlie Wilson 3',
    email: 'charlie@example.com',
    idNumber: '4567890123',
    position: 'Tester',
    operatingSystem: 'macOS',
    status: 'Onboarding',
  },
];

const employeeStatuses = ['Onboarding', 'Active', 'Offboarding'];
const operatingSystems = ['Windows', 'macOS', 'Linux'];

interface SupplyContextProps {
  statusSystems: typeof operatingSystems;
  status: typeof employeeStatuses;
  employees: typeof initialEmployees;
  filter: string;
  addEmployee: () => void;
  editEmployee: (id: number) => void;
  deleteEmployee: () => void;
  confirmDelete: (employee: Employee) => void;
  modalAdd: () => void;
  changeStatus: (id: number, newStatus: string) => void;
  changeOS: (id: number, newOS: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  employeeToDelete: Employee | null;
  setEmployeeToDelete: React.Dispatch<React.SetStateAction<string>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;

  changePage: (pageNumber: number) => void;
  currentPage: number;

  currentEmployees: Employee[];
  filteredEmployees: Employee[];

  employeesPerPage: number;
}
const SupplyContext = createContext<SupplyContextProps | undefined>(undefined);

export function SupplyProviderEmployees({ children }: { children: ReactNode }) {
  const [status] = useState(employeeStatuses);
  const [statusSystems] = useState(operatingSystems);
  const [employees, setEmployees] = useState(initialEmployees);
  const [filter, setFilter] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  // Simulate adding an employee
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
  const setAddEmployees = () => {
    console.log('Add employee');
    setAddEmployees();
    setAddModal(false);
  };

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
      employees.map((employee) => (employee.id === id ? { ...employee, status: newStatus } : employee)),
    );
  };

  const changeOS = (id: number, newOS: string) => {
    setEmployees(
      employees.map((employee) => (employee.id === id ? { ...employee, operatingSystem: newOS } : employee)),
    );
  };

  const filteredEmployees = employees.filter(
    (employee) => employee.name.toLowerCase().includes(filter.toLowerCase())
      || employee.email.toLowerCase().includes(filter.toLowerCase())
      || employee.idNumber.includes(filter)
      || employee.position.toLowerCase().includes(filter.toLowerCase())
      || employee.operatingSystem.toLowerCase().includes(filter.toLowerCase()),
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee,
  );

  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

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
