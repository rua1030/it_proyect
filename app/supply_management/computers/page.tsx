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
import CardForm from '@/components/card-form-c';
import { useSupplyContext } from '@/context/context-computers';

export default function SupplyManagement() {
  const {
    status,
    supplies,
    filter,
    setFilter,
    deleteModal,
    setDeleteModal,
    supplyToDelete,
    addModal,
    setaddModal,
    confirmDelete,
    deleteSupply,
    confirmadd,
    addSupply,
    changeStatus,
    editSupply,
  } = useSupplyContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [suppliesPerPage] = useState(5);

  // Filter supplies
  const filteredSupplies = supplies.filter(
    (supply) =>
      supply.brand.toLowerCase().includes(filter.toLowerCase()) ||
      supply.serial.toLowerCase().includes(filter.toLowerCase())
  );

  // Calculate indices for pagination
  const indexOfLastSupply = currentPage * suppliesPerPage;
  const indexOfFirstSupply = indexOfLastSupply - suppliesPerPage;
  const currentSupplies = filteredSupplies.slice(
    indexOfFirstSupply,
    indexOfLastSupply
  );

  // Change page
  const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Supply Management / Computers</h1>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search by brand or serial..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => confirmadd()}>
          <Plus className="mr-2 h-4 w-4" /> Add Computers
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brand</TableHead>
            <TableHead>Serial</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentSupplies.map((supply) => (
            <TableRow key={supply.id}>
              <TableCell>{supply.brand}</TableCell>
              <TableCell>{supply.serial}</TableCell>
              <TableCell>
                <Select
                  value={supply.status}
                  onValueChange={(value) => changeStatus(supply.id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {status.map((status) => (
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
                  onClick={() => editSupply(supply.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => confirmDelete(supply)}
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
        {currentPage <
          Math.ceil(filteredSupplies.length / suppliesPerPage) - 1 && (
          <>
            {currentPage <
              Math.ceil(filteredSupplies.length / suppliesPerPage) - 2 && (
              <span className="mx-1">...</span>
            )}
            <Button
              onClick={() =>
                changePage(Math.ceil(filteredSupplies.length / suppliesPerPage))
              }
              variant={
                currentPage ===
                Math.ceil(filteredSupplies.length / suppliesPerPage)
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
            <DialogTitle>Confirm deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the supply with serial "
              {supplyToDelete?.serial}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteSupply}>
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
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
