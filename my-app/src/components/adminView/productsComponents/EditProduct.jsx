import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../AdminView.module.css';
import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import updateProducts from '../../../hooks/UpdateProduct';

const EditProduct = ({ products, setUpdateStatus, updateStatus, setNavSection, handleLogOut }) => {
  const { id } = useParams();

  const [productToUpdate, setProductToUpdate] = useState(null);
  useEffect(() => {
    const filterProduct = products.filter((product) => product.id === parseInt(id));
    const updatedProduct = Object.assign({}, { ...filterProduct });
    setProductToUpdate(updatedProduct[0]);
  }, []);

  const setProductName = (name) => {
    const newProductToUpdate = Object.assign({}, { ...productToUpdate, product: name });
    setProductToUpdate(newProductToUpdate);
  };

  const setProductPrice = (price) => {
    const newProductToUpdate = Object.assign({}, { ...productToUpdate, price: price });
    setProductToUpdate(newProductToUpdate);
  };
  const setProductCategory = (category) => {
    const newProductToUpdate = Object.assign({}, { ...productToUpdate, category: category });
    setProductToUpdate(newProductToUpdate);
  };
  const setProductId = (id) => {
    const newProductToUpdate = Object.assign({}, { ...productToUpdate, id: id });
    setProductToUpdate(newProductToUpdate);
  };
  console.log(setProductId);


  const onSubmit = (e) => {
    e.preventDefault();
    const editedProduct = [{productToUpdate}];
    
    updateProducts(editedProduct[0]);
    setUpdateStatus(!updateStatus);
    console.log('producto editado', editedProduct);
  };

  if (productToUpdate) {
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
        <fieldset className={styles.formLogin}>
          <>
            <form onSubmit={onSubmit} key={productToUpdate.id}>
              <div>
                <input type='text' className={styles.input} placeholder='Producto' value={productToUpdate.product} onChange={(e) => setProductName(e.target.value)} />
              </div>
              <div>
                <input type='number' className={styles.input} placeholder='Precio' value={productToUpdate.price} onChange={(e) => setProductPrice(e.target.value)} />
              </div>

              <select value={productToUpdate.category} onChange={(e) => setProductCategory(e.target.value)}>
                <option value={'desayuno'}>Desayuno</option>
                <option value={'almuerzo'}>Almuerzo</option>
              </select>

              <button className={styles.loginbtn} type="submit">
                Editar producto
              </button>
            </form>


          </>


        </fieldset>

      </div>
    );
  }
};

export default EditProduct;