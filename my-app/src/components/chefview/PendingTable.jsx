import React from 'react';
import styles from './ChefView.module.css';
import moment from 'moment';

const PendingTable = ({ ordersToView, updateOrderStatus }) => {

  return (
    <div className={styles.menuOrderContainer}>
      <article className={styles.split}>
        <section className={styles.tableContainer1}>
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
                ordersToView.filter((e) => e.status === 'pendiente').map((order) => {

                  return (
                    <>
                      <tr key={order.id}>
                        <td >{order.table}</td>
                        <td >{order.product}</td>
                        <td >{order.quantity}</td>
                        <td >{moment(order.startDate).startOf('milisecond').fromNow()}</td>
                        <td >
                        <button className={styles.deleteProduct} onClick={() => updateOrderStatus(order)}>pendiente</button>
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
