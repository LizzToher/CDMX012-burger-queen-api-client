import React, { useState } from 'react';
import styles from './WaiterView.module.css';

const OrdersView = ({ orders, setOrders }) => {

  const [counter, setCounter] = useState(1);

  const removeProductFromOrder = (productId) => {
    const orderIndex = orders.findIndex(order => order.id === productId);
    const removedProduct = ([...orders.slice(0, orderIndex), ...orders.slice(orderIndex + 1)]);
    setOrders(removedProduct);
    setCounter(counter + 1);
    console.log('desde removeProductFromOrder', orders);
    if (removeProductFromOrder) {
      setCounter(1);
    }
  };

  const incrementClik = () => {
    setCounter(counter + 1);
  };

  const decrementClik = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (

    <section className={styles.orderContainer}>
      <h1 c>Órdenes</h1>
      <section className={styles.orderTable}>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((product) => {
                return (
                  <section key={product.id}  >
                    <tr>
                      <td className={styles.cell}>{product.product}</td>
                      <td>${product.price}</td>
                      <td>
                        <button onClick={() => incrementClik(product.id)}>+</button>
                        <p type='number'>{counter}</p>
                        <button onClick={() => decrementClik(product.id)}>-</button>
                      </td>
                      <td>
                        <button onClick={() => removeProductFromOrder(product.id)}>Eliminar</button>
                      </td>
                    </tr>
                  </section>
                );
              })
            }
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default OrdersView;
