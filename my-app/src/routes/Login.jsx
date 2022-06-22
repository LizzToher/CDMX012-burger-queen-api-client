import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth, UserContext } from '../context/UserProvider';
import styles from './Login.module.css';
import burger from '../assets/burger.png';
import logo_large from '../assets/logo_large.png';

const Login = () => {
  const { login } = useAuth();
  const { userRol } = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmitLogin = async ({ email, password }) => {
    try {
      await login(email, password);
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
  };

  return (
    <>
      <div className={styles.container}>
        <section>
          <img className={styles.burgerlogo} alt='backgroundimg' src={burger}></img>
        </section>
        <section className={styles.formLogoContainer}>
          <img className={styles.queenLogo} alt='backgroundimg' src={logo_large}></img>
          <form className={styles.formLogin} onSubmit={handleSubmit(onSubmitLogin)}>
            <input type='email' className={styles.input} placeholder='correo electrónico'
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
            <input type='password' className={styles.input} placeholder='Ingrese Contraseña'
              {...register('password', {
                required: {
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
            <button className={styles.loginbtn} type='submit'>Iniciar Sesión</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
