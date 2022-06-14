import React from 'react';
import styles from './ChefView.module.css';

const PendingTable = ({ orders, updateOrderStatus }) => {
  return (
    <div className={styles.menuOrderContainer}>
      <article className={styles.split}>
        <section className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Mesa</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>tiempo</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    <>
                      <tr key={order.id}>
                        <td >{order.table}</td>
                        <td >{order.product}</td>
                        <td >{order.quantity}</td>
                        <td >{order.date}</td>
                        <td >{order.id}</td>
                        <td >
                          <button onClick={() => updateOrderStatus(order)}>Pendiente</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
};

export default PendingTable;
