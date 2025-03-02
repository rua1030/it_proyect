import type { Metadata } from 'next';
import './globals.css';
import { SupplyProviderDevices } from '@/context/context-display';
import { SupplyProviderComputer } from '@/context/context-computers';
import { SupplyProviderPeripherals } from '@/context/context-peripherals';
import { SupplyProviderEmployees } from '@/context/context-employees';
import ClientWrapper from './ClientWrapper';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SupplyProviderEmployees>
          <SupplyProviderPeripherals>
            <SupplyProviderComputer>
              <SupplyProviderDevices>
                <ClientWrapper>
                  <main
                    className="flex-1 overflow-y-auto p-9"
                    style={{ paddingTop: '3%', width: '100%' }}
                  >
                    {children}
                  </main>
                </ClientWrapper>
              </SupplyProviderDevices>
            </SupplyProviderComputer>
          </SupplyProviderPeripherals>
        </SupplyProviderEmployees>
      </body>
    </html>
  );
}
