'use client';

import React, {
  createContext, useState, useContext, ReactNode,
} from 'react';

// Simulated supply data
const initialSupplies = [
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
  {
    id: 1,
    brand: 'Dell',
    serial: 'DELL123456',
    type: 'Laptop',
    status: 'In use',
  },
  {
    id: 2,
    brand: 'HP',
    serial: 'HP789012',
    type: 'Printer',
    status: 'Available',
  },
  {
    id: 3,
    brand: 'Lenovo',
    serial: 'LEN345678',
    type: 'Desktop',
    status: 'In maintenance',
  },
  {
    id: 4,
    brand: 'Apple',
    serial: 'APP901234',
    type: 'Tablet',
    status: 'In use',
  },
  {
    id: 5,
    brand: 'Asus',
    serial: 'ASUS567890',
    type: 'Monitor',
    status: 'Available',
  },
];

const supplyStatuses = ['In use', 'In maintenance', 'Available'];

// Define the shape of the context
interface SupplyContextProps {
  supplyStatuse: typeof supplyStatuses;
  supplies: typeof initialSupplies;
  filter: string;
  currentPage: number;
  suppliesPerPage: number;
  addSupply: () => void;
  editSupply: (id: number) => void;
  deleteSupply: () => void;
  confirmDelete: (supply: string) => void;
  confirmAdd: () => void;
  changeStatus: (id: number, newStatus: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  supplyToDelete: string;
  setSupplyToDelete: React.Dispatch<React.SetStateAction<string>>;
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  supplyToAdd: string;
  setSupplyToAdd: React.Dispatch<React.SetStateAction<string>>;
}

const SupplyContext = createContext<SupplyContextProps | undefined>(undefined);

export function SupplyProviderDevices({ children }: { children: ReactNode }) {
  const [supplyStatuse] = useState(supplyStatuses);
  const [supplies, setSupplies] = useState(initialSupplies);
  const [filter, setFilter] = useState('');
  const [currentPage] = useState(1);
  const [suppliesPerPage] = useState(5);
  const [deleteModal, setDeleteModal] = useState(false);
  const [supplyToDelete, setSupplyToDelete] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [supplyToAdd, setSupplyToAdd] = useState(null);

  const addSupply = () => {
    console.log('Add supply');
  };

  // Simulate editing a supply
  const editSupply = (id: number) => {
    console.log('Edit supply', id);
  };

  // Open confirmation modal for deletion
  const confirmDelete = (supply: string) => {
    setSupplyToDelete(supply);
    setDeleteModal(true);
  };

  const confirmAdd = () => {
    setAddModal(true);
  };

  // Delete supply
  const deleteSupply = () => {
    if (supplyToDelete) {
      setSupplies(supplies.filter((supply) => supply.id !== supplyToDelete.id));
      setDeleteModal(false);
      setSupplyToDelete(null);
    }
  };

  // Simulate status change
  const changeStatus = (id: number, newStatus: string) => {
    setSupplies(
      supplies.map((supply) => (supply.id === id ? { ...supply, status: newStatus } : supply)),
    );
  };

  return (
    <SupplyContext.Provider
      value={{
        supplyStatuse,
        supplies,
        filter,
        currentPage,
        suppliesPerPage,
        addSupply,
        editSupply,
        deleteSupply,
        confirmDelete,
        confirmAdd,
        changeStatus,
        setFilter,
        deleteModal,
        setDeleteModal,
        supplyToDelete,
        setSupplyToDelete,
        addModal,
        setAddModal,
        supplyToAdd,
        setSupplyToAdd,
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
