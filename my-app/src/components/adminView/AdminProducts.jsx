import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logoSmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import edit from '../../assets/edit.png';
import delete1 from '../../assets/delete1.png';
import styles from './AdminView.module.css';
import deleteProduct from '../../hooks/DeleteProduct';
import fetchProducts from '../../hooks/Products';


const AdminProducts = ({ products, setNavSection, handleLogOut }) => {

  const [deleteStatus, setDeleteStatus] = useState(false);
  const [newDeleteStatus] = fetchProducts(deleteStatus);
  const removeProductFromData = (productId) => {
    const orderIndex = products.find((product) => product.id === productId);
    console.log('quien es delete status',deleteStatus);
    deleteProduct(orderIndex);
    setDeleteStatus(!deleteStatus);
  };
  
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
        <section className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {newDeleteStatus &&
                newDeleteStatus.map((product) => {
                  return (
                    <>
                      <tr key={product.id}>
                        <td >{product.product}</td>
                        <td >{product.price}</td>
                        <td >{product.category}</td>
                        <td className={styles.buttonContainer}>
                          <img
                            className={styles.action}
                            src={edit}
                            alt="edit"
                            // onClick={handleLogOut}
                          />
                          <br />
                          <img
                            className={styles.action}
                            src={delete1}
                            alt="delete"
                          onClick={()=>removeProductFromData(product.id)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </section>
        <div>
          <Link to='new'>
          <button className={styles.deleteProduct}>+</button>
            </Link>
        </div>
      </div>
    );


};


export default AdminProducts;
