import React from 'react';
import CompletedOrders from './CompletedOrders';
import styles from './ChefView.module.css';
import logosmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import PendingTable from './PendingTable';

const PendingOrders = ({ ordersToView, handleLogOut, updateOrderStatus }) => {
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
              <h2 className={styles.menuLetter}>Pendientes</h2>
              <section className={styles.deployedMenu}>
                <PendingTable ordersToView={ordersToView} updateOrderStatus={updateOrderStatus} />
              </section>
            </section>
          </article>
        </div>
        <section className={styles.menuOrderContainer}>
          <h2 className={styles.menuLetter1}>Completados</h2>
          <CompletedOrders ordersToView={ordersToView} updateOrderStatus={updateOrderStatus} />
        </section>
      </div>
    </>
  );
};

export default PendingOrders;
