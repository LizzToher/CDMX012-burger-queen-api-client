import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddEmployee = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const onSubmitLogin = async ({ email, password }) => { 
        try {
          await createUserWithEmailAndPassword(email, password);
          console.log('usuario registrado', email, password);
          console.log('user rol desde login', userRol.doc.rol);
          navigate('/Home');
    
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              setError('email', {
                message: 'Usuario ya registrado',
              });
              break;
            case 'auth/invalid-email':
              setError('email', {
                message: 'Formato email no válido',
              });
              break;
            case 'auth/wrong-password':
              setError('password', {
                message: 'Contraseña inválida'
              });
              break;
          }
        }
  return (
    <fieldset>
        <div className='titleHeader'>
          <h1>REGISTRATE</h1>
        </div>
        <form className='formContainer' onSubmit={handleSubmit(onSubmitLogin)}>
          <div>
            <input type="text" name='name' id='name' placeholder='Nombre' />
          </div>
          <div>
            <input type="text" name='lasname' id='lastname' placeholder='Apellido' />
          </div>
          <div>
            <input type="email" name='email' className='email' placeholder='correo electrónico'
              {...register("email", {
                required: {
                  value: true,
                  message: 'Campo obligatorio'
                },
                pattern: {
                  value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
                  message: 'Formato de email inválido'
                }
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div>
            <input type='password' name='password' className='pass' placeholder='contraseña'
              {...register("password", {
                required: true, minLength: {
                  value: 6,
                  message: 'Contraseña mínimo 6 caracteres',
                },
                validate: {
                  trim: (v) => {
                    if (!v.trim()) {
                      return 'no se aceptan espacios vacíos';
                    }
                    return true;
                  }
                },
              })}

            />
            {errors.password && errors.password.message}
            <br />
            <button
              className="loginButton1" type='submit'  >
              Agregar Product
            </button>
          </div>
        </form>
      </fieldset>
  )
}

export default AddEmployee