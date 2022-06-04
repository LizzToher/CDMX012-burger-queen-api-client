import React, { useState } from 'react';
import styles from './WaiterView.module.css';

const OrdersView = ({ orders, setOrders }) => {

  const [counter, setCounter] = useState(1);

  const removeProductFromOrder = (productId) => {
    const orderIndex = orders.findIndex(order => order.id === productId);
    const removedProduct = ([...orders.slice(0, orderIndex), ...orders.slice(orderIndex + 1)]);
    setOrders(removedProduct);
    setCounter(counter + 1);
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

  const totalAmount = (Object.values(orders).reduce((acum, { price }) => acum + counter * price, 0));
  console.log('precio total', totalAmount);

  return (

    <section className={styles.orderContainer}>
      <h1 c>Órdenes</h1>
      <section className={styles.orderTable}>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acción</th>
            </tr>
          </thead>
          {orders &&
            orders.map((product) => {
              return (
                <tbody key={product.id} >
                  <tr>
                    <td className={styles.cell}>{product.product}</td>
                    <td>${product.price}</td>
                    <td className={styles.counter}>
                      <button clasName={styles.counterbtn} onClick={() => decrementClik(product.id)}>-</button>
                      <p>{counter}</p>
                      <button clasName={styles.counterbtn} onClick={() => incrementClik(product.id)}>+</button>
                    </td>
                    <td>
                      <button onClick={() => removeProductFromOrder(product.id)}>Eliminar</button>
                    </td>
                  </tr>
                </tbody>

              );
            })
          }
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${totalAmount}</td>
              <td></td>
              <button>Enviar pedido</button>
            </tr>
          </tfoot>
        </table>
      </section>
    </section>
  );
};

export default OrdersView;
