import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SupplyProviderPeripherals } from '@/context/context-peripherals';
import SupplyManagement from '@/app/supply_management/peripherals/page';

describe('DevicesManagement', () => {
  const setup = () => {
    render(
      <SupplyProviderPeripherals>
        <SupplyManagement />
      </SupplyProviderPeripherals>,
    );
  };

  it('matches snapshot', () => {
    const { asFragment } = render(
      <SupplyProviderPeripherals>
        <SupplyManagement />
      </SupplyProviderPeripherals>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all necessary fields', () => {
    setup();
    expect(screen.getByText('Supply Management / Peripheral')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders Devices Management title', () => {
    setup();
    expect(screen.getByText('Supply Management / Peripheral')).toBeInTheDocument();
  });

  it('updates filter on input change', () => {
    setup();
    const input = screen.getByPlaceholderText(
      'Search by brand or name...',
    );
    fireEvent.change(input, { target: { value: 'Logitech' } });
    expect(input).toHaveValue('Logitech');
  });

  it('opens add peripherals modal on button click', () => {
    setup();
    const addButton = screen.getByText('Add Peripheral');
    fireEvent.click(addButton);
    expect(screen.getByText('Add peripherals')).toBeInTheDocument();
  });

  it('changes page when pagination button is clicked', () => {
    setup();
    const nextPageButton = screen.getByText(/Next/i);
    fireEvent.click(nextPageButton);
  });
});
