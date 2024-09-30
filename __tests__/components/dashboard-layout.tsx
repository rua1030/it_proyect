import { render, screen } from '@testing-library/react';
import DashboardLayout from '@/components/dashboard-layout';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('DashboardLayout', () => {
  it('renders the logo', () => {
    render(<DashboardLayout />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<DashboardLayout />);

    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    const employeesLink = screen.getByRole('link', { name: /employees/i });
    const computersLink = screen.getByRole('link', { name: /computers/i });
    const devicesLink = screen.getByRole('link', { name: /devices/i });
    const peripheralsLink = screen.getByRole('link', { name: /peripherals/i });
    const settingsLink = screen.getByRole('link', { name: /settings/i });
    const logoutLink = screen.getByRole('link', { name: /logout/i });

    expect(dashboardLink).toBeInTheDocument();
    expect(employeesLink).toBeInTheDocument();
    expect(computersLink).toBeInTheDocument();
    expect(devicesLink).toBeInTheDocument();
    expect(peripheralsLink).toBeInTheDocument();
    expect(settingsLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  it('renders the mobile menu button on small screens', () => {
    render(<DashboardLayout />);
    const menuButton = screen.getByRole('button', { name: /open sidebar/i });
    expect(menuButton).toBeInTheDocument();
  });
});
