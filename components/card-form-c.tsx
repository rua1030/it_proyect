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
          add computer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Campo para la Brand */}
        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            placeholder="Enter the Brand of the product"
            {...register('brand', { required: 'Brand is required' })}
            className={`form-control ${errors.brand ? 'is-invalid' : ''}`}
          />
          {errors.brand && (
            <div className="text-danger">{errors.brand.message}</div>
          )}
        </div>

        {/* Campo para el número de serie */}
        <div className="space-y-2">
          <Label htmlFor="serial">Number serial</Label>
          <Input
            id="serial"
            placeholder="Enter the product serial number"
            {...register('serial', { required: 'Serial number is required' })}
            className={`form-control ${errors.serial ? 'is-invalid' : ''}`}
          />
          {errors.serial && (
            <div className="text-danger">{errors.serial.message}</div>
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
