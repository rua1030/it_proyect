import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Definimos la interfaz para los datos del formulario
interface IFormInput {
  name: string;
  email: string;
  idNumber: string;
  position: string;
  operatingSystem: string;
}

const FormEmployeed: React.FC = () => {
  // Inicializamos el hook del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // La función que se ejecuta al enviar el formulario
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="card p-4 mx-auto mt-5" style={{ maxWidth: '600px' }}>
      <h5 className="card-title mb-4 text-center">Employee Form</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo para el nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        {/* Campo para el correo electrónico */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Campo para el número de identificación */}
        <div className="mb-3">
          <label htmlFor="idNumber" className="form-label">
            ID Number:
          </label>
          <input
            id="idNumber"
            className={`form-control ${errors.idNumber ? 'is-invalid' : ''}`}
            {...register('idNumber', { required: 'ID Number is required' })}
          />
          {errors.idNumber && (
            <div className="invalid-feedback">{errors.idNumber.message}</div>
          )}
        </div>

        {/* Campo para la posición */}
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position:
          </label>
          <input
            id="position"
            className={`form-control ${errors.position ? 'is-invalid' : ''}`}
            {...register('position', { required: 'Position is required' })}
          />
          {errors.position && (
            <div className="invalid-feedback">{errors.position.message}</div>
          )}
        </div>

        {/* Campo para el sistema operativo */}
        <div className="mb-3">
          <label htmlFor="operatingSystem" className="form-label">
            Operating System:
          </label>
          <select
            id="operatingSystem"
            className={`form-select ${errors.operatingSystem ? 'is-invalid' : ''}`}
            {...register('operatingSystem', {
              required: 'Operating System is required',
            })}
          >
            <option value="">Select...</option>
            <option value="Windows">Windows</option>
            <option value="MacOS">MacOS</option>
            <option value="Linux">Linux</option>
            <option value="Other">Other</option>
          </select>
          {errors.operatingSystem && (
            <div className="invalid-feedback">
              {errors.operatingSystem.message}
            </div>
          )}
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEmployeed;
