'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  Monitor,
  Settings,
  LogOut,
  Menu,
  Smartphone,
  Mouse,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="hidden md:flex w-64 flex-col bg-white shadow-md">
        <div className="p-4 border-b">
          <img
            src="/aba_tech_logo.jpeg?height=40&width=120"
            alt="Logo"
            className="mx-auto"
          />
        </div>
        <ScrollArea className="flex-grow">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/employees"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Users className="h-5 w-5" />
              <span>Employees</span>
            </Link>
            <Link
              href="/supply_management/computers"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Monitor className="h-5 w-5" />
              <span>Laptops</span>
            </Link>
            <Link
              href="/supply_management/devices"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Smartphone className="h-5 w-5" />
              <span>Displays</span>
            </Link>
            <Link
              href="/supply_management/peripherals"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Mouse className="h-5 w-5" />
              <span>Peripherals</span>
            </Link>
          </nav>
        </ScrollArea>
        {/* Bottom Items */}
        <div className="p-4 border-t">
          <Link
            href="/settings"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open sidebar</span>
            </Button>
            <div className="text-xl font-semibold text-gray-800" />
            <div className="w-6 md:w-0" />
            {' '}
            {/* Spacer for alignment */}
          </div>
        </header>
      </div>
    </div>
  );
}
