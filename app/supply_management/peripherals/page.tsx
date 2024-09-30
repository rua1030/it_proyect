'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Edit, Trash2 } from 'lucide-react';
import CardForm from '@/components/card-form-p';
import { useSupplyContext } from '@/context/context-peripherals';

export default function PeripheralManagement() {
  const {
    statuses,
    peripherals,
    filter,
    editPeripheral,
    deletePeripheral,
    confirmDelete,
    confirmadd,
    changeStatus,
    setFilter,
    deleteModal,
    setDeleteModal,
    peripheralToDelete,
    addModal,
    setaddModal,
  } = useSupplyContext();
  // Filter peripherals

  const [currentPage, setCurrentPage] = useState(1);
  const [suppliesPerPage] = useState(5);

  const filteredPeripherals = peripherals.filter(
    (peripheral) => peripheral.brand.toLowerCase().includes(filter.toLowerCase())
      || peripheral.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const indexOfLastSupply = currentPage * suppliesPerPage;
  const indexOfFirstSupply = indexOfLastSupply - suppliesPerPage;
  const currentSupplies = filteredPeripherals.slice(
    indexOfFirstSupply,
    indexOfLastSupply,
  );

  // Change page
  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Supply Management / Peripheral
      </h1>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search by brand or name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => confirmadd()}>
          <Plus className="mr-2 h-4 w-4" />
          {' '}
          Add Peripheral
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brand</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentSupplies.map((peripheral) => (
            <TableRow key={peripheral.id}>
              <TableCell>{peripheral.brand}</TableCell>
              <TableCell>{peripheral.name}</TableCell>
              <TableCell>{peripheral.quantity}</TableCell>
              <TableCell>
                <Select
                  value={peripheral.status}
                  onValueChange={(value) => changeStatus(peripheral.id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => editPeripheral(peripheral.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => confirmDelete(peripheral)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {currentPage > 2 && (
          <>
            <Button
              onClick={() => changePage(1)}
              variant={currentPage === 1 ? 'default' : 'outline'}
            >
              1
            </Button>
            {currentPage > 3 && <span className="mx-1">...</span>}
          </>
        )}

        {/* Botón de la página anterior */}
        {currentPage > 1 && (
          <Button onClick={() => changePage(currentPage - 1)} variant="outline">
            {currentPage - 1}
          </Button>
        )}

        {/* Botón de la página actual */}
        <Button variant="default" className="mx-1">
          {currentPage}
        </Button>

        {/* Botón de la siguiente página */}
        {currentPage
          < Math.ceil(filteredPeripherals.length / suppliesPerPage) && (
          <Button onClick={() => changePage(currentPage + 1)} variant="outline">
            {currentPage + 1}
          </Button>
        )}

        {/* Botón de la última página */}
        {currentPage
          < Math.ceil(filteredPeripherals.length / suppliesPerPage) - 1 && (
          <>
            {currentPage
              < Math.ceil(filteredPeripherals.length / suppliesPerPage) - 2 && (
              <span className="mx-1">...</span>
            )}
            <Button
              onClick={() => changePage(
                Math.ceil(filteredPeripherals.length / suppliesPerPage),
              )}
              variant={
                currentPage
                === Math.ceil(filteredPeripherals.length / suppliesPerPage)
                  ? 'default'
                  : 'outline'
              }
            >
              {Math.ceil(filteredPeripherals.length / suppliesPerPage)}
            </Button>
          </>
        )}

        <Button
          onClick={() => changePage(currentPage + 1)}
          disabled={
            currentPage
            === Math.ceil(filteredPeripherals.length / suppliesPerPage)
          }
          className="ml-2"
        >
          Next
        </Button>
      </div>
      <Dialog open={deleteModal} onOpenChange={setDeleteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the peripheral
              {peripheralToDelete?.name}
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deletePeripheral}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={addModal} onOpenChange={setaddModal}>
        <DialogContent>
          <DialogDescription>
            <CardForm />
          </DialogDescription>
          <DialogFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
}
