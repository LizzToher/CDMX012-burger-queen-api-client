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

  // const totalPriceOfCart = (orders) => {
  const totalAmountCount = (Object.values(orders).reduce((acum, { quantity, price }) => acum + quantity * price, 0));
  console.log('precio total', totalAmountCount);
  //   console.log('precio total', totalPriceOfCart);

  // };

  const incrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
      if(productId === order.id) {
        const orderQuantity = order.quantity;
        return {...order, quantity: orderQuantity + 1};
      } else {
        return order;
      }
    });
    setOrders(updateOrders);  
  };

  const decrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
        const orderQuantity = order.quantity;
        if(orderQuantity === 1){
          return console.log({...order, quantity: parseInt(orderQuantity)});
        } else {
          if(productId === order.id){
          return {...order, quantity: orderQuantity - 1};
          }
        }
    
    });
    setOrders(updateOrders);  
  };

  return (
    <div className={styles.container}>
    <div className={styles.menuOrderContainer}>
      <article className={`${styles.split} ${styles.right}`}>
        <section className={styles.centered} >
          <section className={styles.orderContainer}>
            <h1>Órdenes</h1>
            <section className={styles.tableContainer}>
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
                          <td>{product.product}</td>
                          <td>${product.price}</td>
                          <td className={styles.counterContainer}>
                            <button clasName={styles.counterbtn} onClick={() => decrementClik(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button clasName={styles.counterbtn} onClick={() => incrementClik(product.id)}>+</button>
                          </td>
                          <td>
                            <button className={styles.deleteProduct} onClick={() => removeProductFromOrder(product.id)}>Eliminar</button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                }
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
    </div>
  );
};

export default OrdersView;
