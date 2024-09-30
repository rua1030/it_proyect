import { render, screen, fireEvent } from '@testing-library/react';
import Login from '@/app/page';

describe('Login Page', () => {
  it('renders the login page with the correct elements', () => {
    render(<Login />);

    expect(screen.getByText('Access to')).toBeInTheDocument();
    expect(screen.getByText('Enter your credentials to access it Management')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
  });

  it('allows the user to type in the email input', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('allows the user to toggle password visibility', () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', { name: /Show password/i });

    expect(passwordInput).toHaveAttribute('type', 'password');
    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    // Simulate clicking the toggle button again to hide the password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders a clickable login button', () => {
    render(<Login />);

    const loginButton = screen.getByRole('button', { name: /Log in/i });
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
  });

  it('ensure that the button to display passwords is clickable', () => {
    render(<Login />);
    const toggleButton = screen.getByRole('button', { name: /Show password/i });
    fireEvent.click(toggleButton);
    expect(toggleButton).toBeInTheDocument();
  });
});
