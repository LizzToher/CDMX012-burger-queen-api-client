import React, {useContext} from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuth, UserContext } from '../context/UserProvider';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import burger from '../assets/burger.png';
import logo_large from '../assets/logo_large.png';
// import Home from './Home';
// import { auth } from '../firebase/firebase';

// import WaiterView from '../components/WaiterView';
// import WaiterView from '../components/WaiterView';

const Login = () => {
  const { login } = useAuth();
  const { userRol } = useContext(UserContext);
  // const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  
  // const { user } = useContext(UserContext);
  
  // let userRole = null;
  // if (user?.rol) {
    //   userRole = user.rol;
    //   console.log(userRole);
    // }
    
    const onSubmitLogin = async ({email, password}) => {
      // const user= auth.currentUser;   
      try {
      // const user = user.uid;
      await login(email, password);
    //  navigate('Home');
      console.log('usuario registrado', email, password);
      console.log(userRol);

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
    <img className={styles.burgerlogo}alt='backgroundimg' src={burger}></img>
    </section>
   <section className={styles.formLogoContainer}>
    <img className={styles.queenLogo}alt='backgroundimg' src={logo_large}></img>
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
     <button className={styles.loginbtn} type='submit'>Iniciar Sesión</button>
     {/* {user.rol === 'admin'  ? <Home /> : <WaiterView />} */}
    </form>
    </section>
    </div>
    </>
  );
};

export default Login;
