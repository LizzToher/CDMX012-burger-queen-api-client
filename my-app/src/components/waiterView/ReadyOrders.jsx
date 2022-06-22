import React, { useState } from 'react';

import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import fetchOrders from '../../hooks/FetchOrders';
import updateOrders from '../../hooks/UpdateOrder';

function ReadyOrders({ setNavSection, handleLogOut }) {
  const [status, setStatus] = useState(null);
  const [readyOrders] = fetchOrders(status);

  const updateOrderStatus = (order) => {
    const updatedOrder = Object.assign({}, { ...order, status: 'entregado', endDate: new Date() });
    updateOrders(updatedOrder);
    setStatus(!status);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2 className={styles.menuLetter} onClick={() => setNavSection('menu')}>Menú</h2>
        <h2 className={styles.menuLetter} onClick={() => setNavSection('readyOrders')}>Órdenes listas</h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <section className={styles.tableContainer1}>
        <table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Entregar</th>
            </tr>
          </thead>
          <tbody>
            {readyOrders &&
              readyOrders.filter((e) => e.status === 'completado').map((order) => {

                return (
                  <>
                    <tr key={order.id}>
                      <td >{order.table}</td>
                      <td >{order.product}</td>
                      <td >{order.quantity}</td>
                      <td >
                        <input type='checkbox' className={styles.deleteProduct} onChange={() => updateOrderStatus(order)}></input>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default ReadyOrders;