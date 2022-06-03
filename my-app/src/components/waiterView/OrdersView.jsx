import React, { useState } from 'react';
import styles from './WaiterView.module.css';

const OrdersView = ({ orders, setOrders }) => {

  const [counter, setCounter] = useState(1);
  // const [amount, setAmount] = useState(0);

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

  const totalPrice = () => {
    return orders.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = orders.filter((order) => {
          return order.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].price;
  }, 0).toFixed(2);
   
  };

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
                    <td>
                      <button onClick={() => incrementClik(product.id)}>+</button>
                      <p type='number'>{counter}</p>
                      <button onClick={() => decrementClik(product.id)}>-</button>
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
              <td>{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </section>
  );
};

export default OrdersView;
