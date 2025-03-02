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

interface IFormInput {
  brand: string;
  serial: string;
  quantity: number;
}

export default function CardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Add peripherals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Campo para la Brand */}
        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            placeholder="Ingrese la Brand del producto"
            {...register('brand', { required: 'Brand es requerida' })}
            className={`form-control ${errors.brand ? 'is-invalid' : ''}`}
          />
          {errors.brand && (
            <div className="text-danger">{errors.brand.message}</div>
          )}
        </div>

        {/* Campo para el número de serie */}
        <div className="space-y-2">
          <Label htmlFor="serial">Número de Serie</Label>
          <Input
            id="serial"
            placeholder="Enter the product serial number "
            {...register('serial', { required: 'Serial number is required' })}
            className={`form-control ${errors.serial ? 'is-invalid' : ''}`}
          />
          {errors.serial && (
            <div className="text-danger">{errors.serial.message}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">quantity</Label>
          <Input
            id="quantity"
            placeholder="Enter the quantity"
            {...register('quantity', { required: 'quantity is required' })}
            className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
          />
          {errors.quantity && (
            <div className="text-danger">{errors.quantity.message}</div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
}
