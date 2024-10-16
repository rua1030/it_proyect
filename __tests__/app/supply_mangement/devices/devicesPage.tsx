import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SupplyProviderDevices } from '@/context/context-display';
import SupplyManagement from '@/app/supply_management/devices/page';

describe('DevicesManagement', () => {
  const setup = () => {
    render(
      <SupplyProviderDevices>
        <SupplyManagement />
      </SupplyProviderDevices>,
    );
  };

  it('matches snapshot', () => {
    const { asFragment } = render(
      <SupplyProviderDevices>
        <SupplyManagement />
      </SupplyProviderDevices>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all necessary fields', () => {
    setup();
    expect(
      screen.getByText('Supply Management / Displays'),
    ).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Serial')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders Devices Management title', () => {
    setup();
    expect(
      screen.getByText('Supply Management / Displays'),
    ).toBeInTheDocument();
  });

  it('updates filter on input change', () => {
    setup();
    const input = screen.getByPlaceholderText(
      'Search by brand, serial, or type...',
    );
    fireEvent.change(input, { target: { value: 'Dell' } });
    expect(input).toHaveValue('Dell');
  });

  it('opens add Displays modal on button click', () => {
    setup();
    const addButton = screen.getByText('Add displays');
    fireEvent.click(addButton);
    expect(screen.getByText('Add new display')).toBeInTheDocument();
  });

  it('changes page when pagination button is clicked', () => {
    setup();
    const nextPageButton = screen.getByText(/Next/i);
    fireEvent.click(nextPageButton);
  });
});
