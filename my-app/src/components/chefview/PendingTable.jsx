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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((data) => {
                  return (
                    <>
                      {data.products.map((element) => {
                        console.log(data.id);
                        return (
                          <tr key={`${data.id}${element.id}`}>
                            <td >{element.table}</td>
                            <td >{element.product}</td>
                            <td >{element.quantity}</td>
                            <td >{element.date}</td>
                            <td >
                              <button onClick={()=> updateOrderStatus(element)}>pendiente</button>
                            </td>
                          </tr>
                        );
                      })}
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
