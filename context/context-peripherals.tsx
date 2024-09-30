'use client';

import React, {
  createContext, useState, useContext, ReactNode,
} from 'react';

const initialPeripherals = [
  {
    id: 1,
    brand: 'Logitech',
    name: 'MX Master 3',
    quantity: 50,
    status: 'In stock',
  },
  {
    id: 2,
    brand: 'Dell',
    name: 'P2419H Monitor',
    quantity: 30,
    status: 'Low stock',
  },
  {
    id: 3,
    brand: 'Corsair',
    name: 'K70 RGB Keyboard',
    quantity: 20,
    status: 'Out of stock',
  },
  {
    id: 4,
    brand: 'Jabra',
    name: 'Evolve 75 Headset',
    quantity: 40,
    status: 'In stock',
  },
  {
    id: 5,
    brand: 'Microsoft',
    name: 'Surface Dock',
    quantity: 15,
    status: 'Low stock',
  },
];

const peripheralStatuses = ['In stock', 'Low stock', 'Out of stock'];

interface SupplyContextProps {
  statuses: typeof peripheralStatuses;
  peripherals: typeof initialPeripherals;
  filter: string;
  currentPage: number;
  addPeripheral: () => void;
  editPeripheral: (id: number) => void;
  deletePeripheral: () => void;
  confirmDelete: (supply: string) => void;
  confirmadd: () => void;
  changeStatus: (id: number, newStatus: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  peripheralToDelete: string;
  setPeripheralToDelete: React.Dispatch<React.SetStateAction<string>>;
  addModal: boolean;
  setaddModal: React.Dispatch<React.SetStateAction<boolean>>;
  peripheralToadd: string;
  setPeripheralToadd: React.Dispatch<React.SetStateAction<string>>;
}

const SupplyContext = createContext<SupplyContextProps | undefined>(undefined);

export function SupplyProviderPeripherals({
  children,
}: {
  children: ReactNode;
}) {
  const [peripherals, setPeripherals] = useState(initialPeripherals);
  const [filter, setFilter] = useState('');
  const [currentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState(false);
  const [peripheralToDelete, setPeripheralToDelete] = useState(null);
  const [addModal, setaddModal] = useState(false);
  const [peripheralToadd, setPeripheralToadd] = useState(null);
  const [statuses] = useState(peripheralStatuses);

  const addPeripheral = () => {
    console.log('Add peripheral');
  };

  // Simulate editing a peripheral
  const editPeripheral = (id: number) => {
    console.log('Edit peripheral', id);
  };

  // Open confirmation modal for deletion
  const confirmDelete = () => {
    setDeleteModal(true);
  };

  const confirmadd = () => {
    setaddModal(true);
  };

  // Delete peripheral
  const deletePeripheral = () => {
    if (peripheralToDelete) {
      setPeripherals(
        peripherals.filter(
          (peripheral) => peripheral.id !== peripheralToDelete.id,
        ),
      );
      setDeleteModal(false);
      setPeripheralToDelete(null);
    }
  };

  // Simulate status change
  const changeStatus = (id: number, newStatus: string) => {
    setPeripherals(
      peripherals.map((peripheral) => (peripheral.id === id ? { ...peripheral, status: newStatus } : peripheral)),
    );
  };
  return (
    <SupplyContext.Provider
      value={{
        peripherals,
        filter,
        currentPage,
        addPeripheral,
        editPeripheral,
        deletePeripheral,
        confirmDelete,
        confirmadd,
        changeStatus,
        setFilter,
        deleteModal,
        setDeleteModal,
        peripheralToDelete,
        setPeripheralToDelete,
        addModal,
        setaddModal,
        peripheralToadd,
        setPeripheralToadd,
        statuses,
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
