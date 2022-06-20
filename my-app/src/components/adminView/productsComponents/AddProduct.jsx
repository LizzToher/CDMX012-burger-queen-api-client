import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import styles from '../AdminView.module.css';
import fetchProducts from '../../../hooks/Products';
import addProduct from '../../../hooks/SaveProducts';

const AddProduct = ({ setNavSection, handleLogOut }) => {
 
  const navigate = useNavigate();
  
  const [products] = fetchProducts();
  
  const handleOnClick = () => {
    navigate(-1);
    setNavSection('products');
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log(products);
  const onSubmit =( e)=>{
    console.log(e);
    e.preventDefault();
    // console.log(e.target.product.value);
    addProduct(products, e.target.product.value);
  
};

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2 className={styles.menuLetter} onClick={() => setNavSection('employees')}>
          Trabajadores
        </h2>
        <h2 className={styles.menuLetter} onClick={() => setNavSection('products')}>
          Productos
        </h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <button className={styles.backbtn} onClick={() => handleOnClick()}>regresar</button>
      <fieldset className={styles.formLogin}>
      
        <form
          className="formContainer"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input type='text' className={styles.input} placeholder='Producto'
              {...register('product', { required: true, maxLength: 20 })}
            />
            {errors.product?.type === 'required' &&
              'Campo Producto es requerido'}
          </div>
          <div>
            <input type='number'  className={styles.input} placeholder='Precio'
              {...register('price', { required: true, min: 2, max: 6 })}
            />
            {errors.price?.type === 'required' && 'Campo Precio es requerido'}
          </div>
          <div  >
          <select
            {...register('category', { required: true })}
          >
            <option value={'desayuno'}>Desayuno</option>
            <option value={'almuerzo'}>Almuerzo</option>
            {errors.category?.type === 'required' && 'Campo Menú es requerido'}
          </select>
          </div>

          <button className={styles.loginbtn} type="submit">
            Agregar Producto
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddProduct;
