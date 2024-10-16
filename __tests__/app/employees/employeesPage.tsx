import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SupplyProviderEmployees } from '@/context/context-employees';
import EmployeeManagement from '@/app/employees/page';

describe('EmployeeManagement', () => {
  const setup = () => {
    render(
      <SupplyProviderEmployees>
        <EmployeeManagement />
      </SupplyProviderEmployees>,
    );
  };

  it('matches snapshot', () => {
    const { asFragment } = render(
      <SupplyProviderEmployees>
        <EmployeeManagement />
      </SupplyProviderEmployees>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all necessary fields', () => {
    setup();
    expect(screen.getByText('Employee Management')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('ID Number')).toBeInTheDocument();
    expect(screen.getByText('Position')).toBeInTheDocument();
    expect(screen.getByText('Operating System')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders Employee Management title', () => {
    setup();
    expect(screen.getByText('Employee Management')).toBeInTheDocument();
  });

  it('updates filter on input change', () => {
    setup();
    const input = screen.getByPlaceholderText(
      'Search by name, email, or ID number...',
    );
    fireEvent.change(input, { target: { value: 'jhon' } });
    expect(input).toHaveValue('jhon');
  });

  it('opens add employee modal on button click', () => {
    setup();
    const addButton = screen.getByText('Add Employeed');
    fireEvent.click(addButton);
    expect(screen.getByText('Add employee')).toBeInTheDocument();
  });

  it('changes page when pagination button is clicked', () => {
    setup();
    const nextPageButton = screen.getByText(/Next/i);
    fireEvent.click(nextPageButton);
  });
});
