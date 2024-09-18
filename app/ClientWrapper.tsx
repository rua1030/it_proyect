'use client';

import { usePathname } from 'next/navigation';
import DashboardLayout from '@/components/dashboard-layout';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const allowedRoutes = [
    '/dashboard',
    '/settings',
    '/employees',
    '/supply_management/computers',
    '/supply_management/devices',
    '/supply_management/peripherals',
  ];
  const shouldShowDashboard = allowedRoutes.includes(pathname);
  return (
    <div className="flex">
      {shouldShowDashboard && <DashboardLayout />}
      {children}
    </div>
  );
}
