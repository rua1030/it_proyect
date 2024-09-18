'use client';

import React, {
  createContext, useState, useContext, ReactNode,
} from 'react';

const initialSupplies = [
  {
    id: 1, brand: 'Dell', serial: 'DELL123456', status: 'Available',
  },
  {
    id: 2, brand: 'HP', serial: 'HP789012', status: 'In use',
  },
  {
    id: 3, brand: 'Lenovo', serial: 'LEN345678', status: 'In storage',
  },
  {
    id: 4, brand: 'Apple', serial: 'APP901234', status: 'Available',
  },
  {
    id: 5, brand: 'Asus', serial: 'ASUS567890', status: 'Stolen',
  },
];

const supplyStatuses = ['Available', 'In storage', 'In use', 'Stolen'];

interface SupplyContextProps {
  status: typeof supplyStatuses;
  supplies: typeof initialSupplies;
  filter: string;
  currentPage: number;
  suppliesPerPage: number;
  addSupply: () => void;
  editSupply: (id: number) => void;
  deleteSupply: () => void;
  confirmDelete: (supply: any) => void;
  confirmadd: () => void;
  changeStatus: (id: number, newStatus: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  supplyToDelete: any;
  setSupplyToDelete: React.Dispatch<React.SetStateAction<any>>;
  addModal: boolean;
  setaddModal: React.Dispatch<React.SetStateAction<boolean>>;
  supplyToadd: any;
  setSupplyToadd: React.Dispatch<React.SetStateAction<any>>;
}

const SupplyContext = createContext<SupplyContextProps | undefined>(undefined);

export function SupplyProviderComputer({
  children,
}: {
  children: ReactNode;
}) {
  const [supplies, setSupplies] = useState(initialSupplies);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [suppliesPerPage] = useState(5);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setaddModal] = useState(false);
  const [supplyToDelete, setSupplyToDelete] = useState(null);
  const [supplyToadd, setSupplyToadd] = useState(null);
  const [status] = useState(supplyStatuses);

  // Simulate adding a supply
  const addSupply = () => {
    console.log('Add supply');
  };

  // Simulate editing a supply
  const editSupply = (id: number) => {
    console.log('Edit supply', id);
  };

  // Open confirmation modal for deletion
  const confirmDelete = (supply: any) => {
    setSupplyToDelete(supply);
    setDeleteModal(true);
  };

  const confirmadd = () => {
    setaddModal(true);
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
        status,
        supplies,
        filter,
        currentPage,
        suppliesPerPage,
        addSupply,
        editSupply,
        deleteSupply,
        confirmDelete,
        confirmadd,
        changeStatus,
        setFilter,
        deleteModal,
        setDeleteModal,
        supplyToDelete,
        setSupplyToDelete,
        addModal,
        setaddModal,
        supplyToadd,
        setSupplyToadd,
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
