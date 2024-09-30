'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface IFormInput {
  name: string;
  email: string;
  idNumber: string;
  position: string;
  operatingSystem: string;
}

export default function CardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Add employee
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Campo para el nombre */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            {...register('name', { required: 'Name is required' })}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && (
            <div className="text-danger">{errors.name.message}</div>
          )}
        </div>

        {/* Campo para el correo electrónico */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@correo.com"
            {...register('email', {
              required: 'E-mail is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid e-mail format',
              },
            })}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </div>

        {/* Campo para el número de identificación */}
        <div className="space-y-2">
          <Label htmlFor="idNumber">Id number</Label>
          <Input
            id="idNumber"
            placeholder="Enter your ID number"
            {...register('idNumber', {
              required: 'Identification number is required',
            })}
            className={`form-control ${errors.idNumber ? 'is-invalid' : ''}`}
          />
          {errors.idNumber && (
            <div className="text-danger">{errors.idNumber.message}</div>
          )}
        </div>

        {/* Campo para la posición */}
        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            placeholder="Enter your position or title"
            {...register('position', { required: 'Position is required' })}
            className={`form-control ${errors.position ? 'is-invalid' : ''}`}
          />
          {errors.position && (
            <div className="text-danger">{errors.position.message}</div>
          )}
        </div>

        {/* Campo para el sistema operativo */}
        <div className="space-y-2">
          <Label htmlFor="operatingSystem">Operating System</Label>
          <Select
            id="operatingSystem"
            {...register('operatingSystem', {
              required: 'Operating system is required',
            })}
            className={`form-select ${errors.operatingSystem ? 'is-invalid' : ''}`}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your operating system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="windows">Windows</SelectItem>
              <SelectItem value="macos">macOS</SelectItem>
              <SelectItem value="linux">Linux</SelectItem>
            </SelectContent>
          </Select>
          {errors.operatingSystem && (
            <div className="text-danger">{errors.operatingSystem.message}</div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}
