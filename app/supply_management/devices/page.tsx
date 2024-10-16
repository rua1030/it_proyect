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
import CardForm from '@/components/card-form-d';
import { useSupplyContext } from '@/context/context-display';

export default function AdditionalSupplyManagement() {
  const {
    supplies,
    filter,
    setFilter,
    deleteModal,
    setDeleteModal,
    addModal,
    setAddModal,
    confirmDelete,
    deleteSupply,
    confirmAdd,
    changeStatus,
    editSupply,
  } = useSupplyContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [suppliesPerPage] = useState(5);

  const filteredSupplies = supplies.filter(
    (supply) => supply.brand.toLowerCase().includes(filter.toLowerCase())
      || supply.serial.toLowerCase().includes(filter.toLowerCase())
      || supply.type.toLowerCase().includes(filter.toLowerCase()),
  );

  const indexOfLastSupply = currentPage * suppliesPerPage;
  const indexOfFirstSupply = indexOfLastSupply - suppliesPerPage;
  const currentSupplies = filteredSupplies.slice(
    indexOfFirstSupply,
    indexOfLastSupply,
  );

  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Supply Management / Displays</h1>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search by brand, serial, or type..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => confirmAdd()}>
          <Plus className="mr-2 h-4 w-4" />
          {' '}
          Add displays
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brand</TableHead>
            <TableHead>Serial</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentSupplies.map((supply) => (
            <TableRow key={supply.id}>
              <TableCell>{supply.brand}</TableCell>
              <TableCell>{supply.serial}</TableCell>
              <TableCell>{supply.type}</TableCell>
              <TableCell>
                <Select
                  value={supply.status}
                  onValueChange={(value) => changeStatus(supply.id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {['In use', 'In maintenance', 'Available'].map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button onClick={() => editSupply(supply.id)} variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => confirmDelete(supply)} variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
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

        {/* Botón de la primera página */}
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
        {currentPage < Math.ceil(filteredSupplies.length / suppliesPerPage) && (
          <Button onClick={() => changePage(currentPage + 1)} variant="outline">
            {currentPage + 1}
          </Button>
        )}

        {/* Botón de la última página */}
        {currentPage
          < Math.ceil(filteredSupplies.length / suppliesPerPage) - 1 && (
          <>
            {currentPage
              < Math.ceil(filteredSupplies.length / suppliesPerPage) - 2 && (
              <span className="mx-1">...</span>
            )}
            <Button
              onClick={() => changePage(Math.ceil(filteredSupplies.length / suppliesPerPage))}
              variant={
                currentPage
                === Math.ceil(filteredSupplies.length / suppliesPerPage)
                  ? 'default'
                  : 'outline'
              }
            >
              {Math.ceil(filteredSupplies.length / suppliesPerPage)}
            </Button>
          </>
        )}

        <Button
          onClick={() => changePage(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredSupplies.length / suppliesPerPage)
          }
          className="ml-2"
        >
          Next
        </Button>
      </div>
      <Dialog open={deleteModal} onOpenChange={setDeleteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this supply?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive" onClick={deleteSupply}>
              Delete
            </Button>
            <Button onClick={() => setDeleteModal(false)} variant="ghost">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={addModal} onOpenChange={setAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
          <CardForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
