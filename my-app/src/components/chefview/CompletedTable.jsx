import React from 'react';
import styles from './ChefView.module.css';

const CompletedTable = ({ordersToView}) => {

  console.log('desde completedtable',ordersToView );
  return (
    <div className={styles.menuOrderContainer}>
    <article className={`${styles.split} ${styles.right}`}>
      <section className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>tiempo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersToView &&
              ordersToView.filter((order) => order.status === 'completado').map((order) => {
                return (
                  <>
                    <tr key={order.id}>
                      <td >{order.table}</td>
                      <td >{order.product}</td>
                      <td >{order.quantity}</td>
                      <td >{order.startDate}</td>
                      <td >{order.status}</td>
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

export default CompletedTable;
