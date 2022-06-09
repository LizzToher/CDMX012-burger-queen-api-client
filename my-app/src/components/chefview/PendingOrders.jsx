import React from 'react';
import CompletedOrders from './CompletedOrders';
import styles from './ChefView.module.css';
import logosmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import PendingTable from './PendingTable';

const PendingOrders = ({ orders, handleLogOut }) => {
  return (

    <>

      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <img className={styles.logosmall} src={logosmall} alt="small logo" />
          <h2 className={styles.menuLetter}>Pedidos</h2>
          <img
            className={styles.logout}
            src={logout}
            alt="logout"
            onClick={handleLogOut}
          />
        </header>

        <div className={styles.menuOrderContainer}>

        <article className={`${styles.split} ${styles.left}`}>

        <section className={styles.leftContainer}>

        <section className={styles.leftButtonContainer}>
        <h2 className={styles.menuLetter}>Pendientes</h2>
        </section>

        <section className={styles.deployedMenu}>
                  
                  <PendingTable  orders={orders} />
        </section>

        </section>


        </article>
        </div>
        <CompletedOrders />
      </div>
    </>
  );
};

export default PendingOrders;
