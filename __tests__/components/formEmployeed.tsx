import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormEmployeed from '@/components/FormEmployeed';

describe('FormEmployeed', () => {
  it('renders the form with all fields', () => {
    render(<FormEmployeed />);

    // Verifica que todos los campos del formulario se renderizan
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/id number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/position/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/operating system/i)).toBeInTheDocument();
  });

  it('shows validation errors if required fields are empty', async () => {
    render(<FormEmployeed />);

    // Simula el envío del formulario sin completar los campos
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    // Verifica que los mensajes de error se muestran para los campos vacíos
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/id number is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/position is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/operating system is required/i),
    ).toBeInTheDocument();
  });

  //   it('submits the form with valid data', () => {
  //     const consoleSpy = jest.spyOn(console, 'log');
  //     render(<FormEmployeed />);

  //     // Completa los campos del formulario
  //     fireEvent.input(screen.getByLabelText(/name/i), {
  //       target: { value: 'John Doe' },
  //     });
  //     fireEvent.input(screen.getByLabelText(/email/i), {
  //       target: { value: 'john.doe@example.com' },
  //     });
  //     fireEvent.input(screen.getByLabelText(/id number/i), {
  //       target: { value: '123456' },
  //     });
  //     fireEvent.input(screen.getByLabelText(/position/i), {
  //       target: { value: 'Developer' },
  //     });
  //     fireEvent.change(screen.getByLabelText(/operating system/i), {
  //       target: { value: 'Windows' },
  //     });

  //     fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

//     expect(consoleSpy).toHaveBeenCalledWith({
//       email: 'john.doe@example.com',
//       idNumber: '123456',
//       name: 'John Doe',
//       operatingSystem: 'Windows',
//       position: 'Developer',
//     });
//   });
});
