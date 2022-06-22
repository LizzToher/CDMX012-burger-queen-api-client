import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import styles from '../AdminView.module.css';
import addProduct from '../../../hooks/SaveProducts';


const AddProduct = ({ setNavSection, handleLogOut }) => {

  const [status, setStatus] = useState(null);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('desayuno');

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      product: product,
      price: price,
      category: category
    };
    addProduct(newProduct);
    setStatus(!status);
    setProduct('');
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
      <Link to='../adminView'>
        <button className={styles.backbtn} >regresar</button>
      </Link>

      <fieldset className={styles.formLogin}>
        <form
          className="formContainer"
          onSubmit={onSubmit}
        >
          <div>
            <input type='text' className={styles.input} placeholder='Producto' onChange={(e) => setProduct(e.target.value)} />
          </div>
          <input type='number' className={styles.input} placeholder='Precio' onChange={(e) => setPrice(e.target.value)} />
          <div>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value={'desayuno'}>Desayuno</option>
              <option value={'almuerzo'}>Almuerzo</option>
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
