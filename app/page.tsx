'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function LoginWithImage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div
        className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden"
        style={{
          border: '2px ',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)',
          padding: '20px',
          borderRadius: '4%',
        }}
      >
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/aba_tech_logo.jpeg?height=600&width=400')",
          }}
        ></div>
        <Card className="w-full md:w-1/2 border-none shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Log in
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access it Management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="sr-only">
                    {showPassword ? 'Hide password' : 'Show password'}
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Log in</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
