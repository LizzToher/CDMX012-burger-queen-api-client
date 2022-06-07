import React from 'react';
import styles from './WaiterView.module.css';

const OrderTable = ({orders, incrementClik, decrementClik, removeProductFromOrder, totalAmountCount}) => {

  return (
  <div className={styles.menuOrderContainer}>
      <article className={`${styles.split} ${styles.right}`}>
        <section className={styles.centered} >
          <section className={styles.orderContainer}>
            <h1>Órdenes</h1>
            <section className={styles.tableContainer}>
              {
                
              }
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                {orders &&
                  orders.map((product) => {
                    return (
                        <tr key={product.id}>
                          <td>{product.product}</td>
                          <td>${product.price}</td>
                          <td className={styles.counterContainer}>
                            <button onClick={() => decrementClik(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => incrementClik(product.id)}>+</button>
                          </td>
                          <td>
                            <button className={styles.deleteProduct} onClick={() => removeProductFromOrder(product.id)}>Eliminar</button>
                          </td>
                        </tr>
                    );
                  })
                }
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>${totalAmountCount}</td>
                    <td></td>
                    <button className={styles.sendProduct}>Enviar pedido</button>
                  </tr>
                </tfoot>
                </table>
            </section>
          </section>
        </section>
      </article>
    </div>
  );
};

export default OrderTable;
