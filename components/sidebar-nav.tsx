'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Users,
  Monitor,
  Smartphone,
  Mouse,
  LogOut,
} from 'lucide-react';

export default function SidebarNav() {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  return (
    <nav
      className="flex flex-col h-screen w-64 bg-gray-800 text-white"
      style={{ background: 'black' }}
    >
      <div className="p-4 mb-6">
        <img
          src="/aba_tech_logo.jpeg?height=40&width=120"
          alt="Logo"
          className="mx-auto"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center flex-grow">
        <Link
          href="/dashboard"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full justify-center"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/employees"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full justify-center mt-2"
        >
          <Users size={20} />
          <span>Employees</span>
        </Link>

        {/* Inventory Dropdown */}
        <div className="w-full mt-2">
          <button
            onClick={() => setIsInventoryOpen(!isInventoryOpen)}
            className="flex items-center justify-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
          >
            <span>supply_management</span>
            {isInventoryOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {isInventoryOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                href="/supply_management/computers"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
              >
                <Monitor size={18} />
                <span>Computers</span>
              </Link>
              <Link
                href="/supply_management/devices"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
              >
                <Smartphone size={18} />
                <span>Devices</span>
              </Link>
              <Link
                href="/supply_management/peripherals"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
              >
                <Mouse size={18} />
                <span>Peripherals</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <button
          onClick={() => {
            /* Add logout logic here */
          }}
          className="flex items-center justify-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}
