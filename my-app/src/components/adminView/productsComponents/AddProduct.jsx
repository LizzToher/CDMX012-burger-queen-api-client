import React from 'react';
import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import styles from '../AdminView.module.css';
import { useForm } from 'react-hook-form';
import addProduct from '../../../hooks/SaveProducts';


const AddProduct = ({ products, setNavSection, handleLogOut }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
console.log(products);
  const saveProductToData = (newProduct) => {
console.log('esto lo paso por parametro a saveproduct' , newProduct);
      addProduct(newProduct);
   
    };
    // console.log(saveProductToData);
  

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2 className={styles.menuLetter} onClick={() => setNavSection('employees')}>Trabajadores</h2>
        <h2 className={styles.menuLetter} onClick={() => setNavSection('products')}>Productos</h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <button onClick={() => setNavSection('products')}>regresar</button>
      <fieldset>
        <div className='titleHeader'>
          <h1>Registrar Producto</h1>
        </div>
        <form className='formContainer' onSubmit={handleSubmit(saveProductToData)}>
          <div>
            <input {...register('Producto', { required: true, maxLength: 20 })} />
            {errors.Producto?.type === 'required' && 'Campo Producto es requerido'}
          </div>
          <div>
            <input type='number' {...register('Precio', { required: true, min: 2, max: 6 })} />
            {errors.Precio?.type === 'required' && 'Campo Precio es requerido'}
          </div>
          <select className={styles.selectValue} {...register('Menú', {required: true}) } >
            <option value={'desayuno'}>Desayuno</option>
            <option value={'almuerzo'}>Almuerzo</option>
            {errors.Menú?.type === 'required' && 'Campo Menú es requerido'}
          </select>

          <button
            className="loginButton1" type='submit'  >
            Agregar Product
          </button>

        </form>
      </fieldset>
    </div>
  );
};


export default AddProduct;
