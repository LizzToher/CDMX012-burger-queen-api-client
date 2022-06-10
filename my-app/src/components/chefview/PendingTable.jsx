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
                      {data.products.map((element, i) => {
                        return (
                          <tr key={data.id}>
                            <td key={i}>{element.table}</td>
                            <td key={i}>{element.product}</td>
                            <td key={i}>{element.quantity}</td>
                            <td key={i}>{element.date}</td>
                            <td key={i}>
                              <button onClick={()=> updateOrderStatus(element)}>{element.status}</button>
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
