import React from 'react';
import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import styles from '../AdminView.module.css';
import { useForm } from 'react-hook-form';
import addProduct from '../../../hooks/SaveProducts';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ products, setNavSection, handleLogOut }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
    setNavSection('products');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(products);

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    console.log (e.target.product.value);
    addProduct(e.target.value);
  };
  // console.log(saveProductToData);

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2
          className={styles.menuLetter}
          onClick={() => setNavSection('employees')}
        >
          Trabajadores
        </h2>
        <h2
          className={styles.menuLetter}
          onClick={() => setNavSection('products')}
        >
          Productos
        </h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <button onClick={() => handleOnClick()}>regresar</button>
      <fieldset>
        <div className="titleHeader">
          <h1>Registrar Producto</h1>
        </div>
        <form
          className="formContainer"
          onSubmit={handleSubmit(HandleOnSubmit)}
        >
          <div>
            <input
              {...register('product', { required: true, maxLength: 20 })}
            />
            {errors.product?.type === 'required' &&
              'Campo Producto es requerido'}
          </div>
          <div>
            <input
              type="number"
              {...register('price', { required: true, min: 2, max: 6 })}
            />
            {errors.price?.type === 'required' && 'Campo Precio es requerido'}
          </div>
          <select
            className={styles.selectValue}
            {...register('category', { required: true })}
          >
            <option value={'desayuno'}>Desayuno</option>
            <option value={'almuerzo'}>Almuerzo</option>
            {errors.category?.type === 'required' && 'Campo Menú es requerido'}
          </select>

          <button className="loginButton1" type="submit">
            Agregar Product
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddProduct;
