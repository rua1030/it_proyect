import { render, screen } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page';

describe('Dashboard Page', () => {
  it('should render the dashboard correctly', () => {
    render(<Dashboard />);

    expect(screen.getByText('Inventory Status')).toBeInTheDocument();
    expect(screen.getByText('New Hires')).toBeInTheDocument();
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
    expect(screen.getByText('Inventory Usage')).toBeInTheDocument();
    expect(screen.getByText('left the company')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(
      screen.getByText('Access the most common tasks.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Overview of current inventory levels.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Employees who recently joined the company.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Employees who are leaving the company.'),
    ).toBeInTheDocument();
  });

  it('should render the breadcrumb with the correct link', () => {
    render(<Dashboard />);
    const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  });
});
