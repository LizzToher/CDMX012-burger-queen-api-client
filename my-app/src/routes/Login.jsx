import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { login } = useAuth();
  // const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmitLogin = async ({email, password}) => {
    try {
      await login(email, password);
      navigate('/home');
      console.log('usuario registrado', email, password);

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
    };

  return (
    <>
    <h1>inicia sesión</h1>
    <form onSubmit={handleSubmit(onSubmitLogin)}>
    <input type='email' className='email' placeholder='correo electrónico'
        {...register('email', {
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
             {errors.email && <p>{errors.email.message}</p>}
             <input type="password" placeholder='Ingrese Contraseña'
                {...register('password', {
                  required : {
                  setValueAs: (v) => v.trim(),
                    minLength: {
                      value: 6,
                      message: 'Mínimo 6 carácteres',
                      },
                    },
                    validate: {
                      trim: (v) => {
                        if (!v.trim()) {
                           return 'No se aceptan espacios vacíos';
                          }
                            return true;
                            },
                        },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
     <button className="loginButton" type='submit'>Iniciar Sesión</button>

    </form>
    </>
  );
};

export default Login;
