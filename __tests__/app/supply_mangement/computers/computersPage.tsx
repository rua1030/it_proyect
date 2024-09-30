import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SupplyProviderComputer } from '@/context/context-computers';
import SupplyManagement from '@/app/supply_management/computers/page';

describe('ComputersManagement', () => {
  const setup = () => {
    render(
      <SupplyProviderComputer>
        <SupplyManagement />
      </SupplyProviderComputer>,
    );
  };

  it('matches snapshot', () => {
    const { asFragment } = render(
      <SupplyProviderComputer>
        <SupplyManagement />
      </SupplyProviderComputer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all necessary fields', () => {
    setup();
    expect(screen.getByText('Supply Management / Computers')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Serial')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders Computers Management title', () => {
    setup();
    expect(screen.getByText('Supply Management / Computers')).toBeInTheDocument();
  });

  it('updates filter on input change', () => {
    setup();
    const input = screen.getByPlaceholderText(
      'Search by brand or serial...',
    );
    fireEvent.change(input, { target: { value: 'Dell' } });
    expect(input).toHaveValue('Dell');
  });

  it('opens add computer modal on button click', () => {
    setup();
    const addButton = screen.getByText('Add Computers');
    fireEvent.click(addButton);
    expect(screen.getByText('Add Computers')).toBeInTheDocument();
  });

  it('changes page when pagination button is clicked', () => {
    setup();
    const nextPageButton = screen.getByText(/Next/i);
    fireEvent.click(nextPageButton);
  });
});
