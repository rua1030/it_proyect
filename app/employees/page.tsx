"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Info } from "lucide-react";
import CardForm from "@/components/card-form";
import { useSupplyContext } from "@/context/context-employees";

export default function EmployeeManagement() {
  const {
    employees,
    filter,
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

    changePage,
    currentPage,
    currentEmployees,
    filteredEmployees,
    employeesPerPage
  } = useSupplyContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search by name, email, or ID number..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => modalAdd()}>
          <Plus className="mr-2 h-4 w-4" /> Add Employee
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>ID Number</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Operating System</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEmployees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.idNumber}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>
                <Select
                  value={employee.operatingSystem}
                  onValueChange={(value) => changeOS(employee.id, value)}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select OS" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusSystems.map((os) => (
                      <SelectItem key={os} value={os}>
                        {os}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  value={employee.status}
                  onValueChange={(value) => changeStatus(employee.id, value)}
                >
                  <SelectTrigger className="w-[120px]">
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
                  onClick={() => editEmployee(employee.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => editEmployee(employee.id)}
                >
                  <Info className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => confirmDelete(employee)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
  <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
    Previous
  </Button>
  {currentPage > 2 && (
    <>
      <Button onClick={() => changePage(1)} variant={currentPage === 1 ? "default" : "outline"}>
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
  {currentPage < Math.ceil(filteredEmployees.length / employeesPerPage) && (
    <Button onClick={() => changePage(currentPage + 1)} variant="outline">
      {currentPage + 1}
    </Button>
  )}

  {/* Botón de la última página */}
  {currentPage < Math.ceil(filteredEmployees.length / employeesPerPage) - 1 && (
    <>
      {currentPage < Math.ceil(filteredEmployees.length / employeesPerPage) - 2 && (
        <span className="mx-1">...</span>
      )}
      <Button
        onClick={() => changePage(Math.ceil(filteredEmployees.length / employeesPerPage))}
        variant={currentPage === Math.ceil(filteredEmployees.length / employeesPerPage) ? "default" : "outline"}
      >
        {Math.ceil(filteredEmployees.length / employeesPerPage)}
      </Button>
    </>
  )}

  <Button
    onClick={() => changePage(currentPage + 1)}
    disabled={currentPage === Math.ceil(filteredEmployees.length / employeesPerPage)}
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
              Are you sure you want to delete the employee "
              {employeeToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteEmployee}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={addModal} onOpenChange={setAddModal}>
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
