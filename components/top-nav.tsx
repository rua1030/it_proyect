'use client';

import { Bell } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-end px-4">
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="/placeholder.svg?height=32&width=32"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </nav>
  );
}
