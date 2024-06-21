
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Nombre requerido' })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Correo electrónico requerido',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Correo electrónico inválido'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
