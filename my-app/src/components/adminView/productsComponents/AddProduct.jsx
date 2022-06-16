import React from 'react';
import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import styles from '../AdminView.module.css';


const AddProduct = ({products, setNavSection, handleLogOut, setAddProduct}) => {
    console.log(products);
  return (
    <div className={styles.container}>
    <header className={styles.headerContainer}>
      <img className={styles.logosmall} src={logoSmall} alt="small logo" />
      <h2 className={styles.menuLetter} onClick={() => setNavSection('employees')}>Trabajadores</h2>
      <h2 className={styles.menuLetter} onClick={() => setAddProduct('regresar')}>Productos</h2>
      <img
        className={styles.logout}
        src={logout}
        alt="logout"
        onClick={handleLogOut}
      />
    </header>
    <div>


    </div>
    </div>
  );
};

export default AddProduct;
