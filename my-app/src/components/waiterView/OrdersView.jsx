import React from 'react';
import OrderTable from './OrderTable';
import styles from './WaiterView.module.css';
import orderMessage from '../../assets/orderMessage.png';

const OrdersView = ({ orders, setOrders, tableValue, saveOrderToKitchen}) => {

  const removeProductFromOrder = (productId) => {
    const orderIndex = orders.findIndex((order) => order.id === productId);
    const removedProduct = [
      ...orders.slice(0, orderIndex),
      ...orders.slice(orderIndex + 1),
    ];
    setOrders(removedProduct);
  };

  const totalAmountCount = Object.values(orders).reduce(
    (acum, { quantity, price }) => acum + quantity * price,
    0
  );

  const incrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
      if (productId === order.id) {
        const orderQuantity = order.quantity;
        return { ...order, quantity: orderQuantity + 1 };
      } else {
        return order;
      }
    });
    setOrders(updateOrders);
  };

  const decrementClik = (productId) => {
    const updateOrders = orders.map((order) => {
      const orderQuantity = order.quantity;
      if (orderQuantity === 1) {
        return order;
      }
      if (productId === order.id) {
        const orderQuantity = order.quantity;
        return { ...order, quantity: orderQuantity - 1 };
      } else {
        return order;
      }
    });
    setOrders(updateOrders);
  };

  if (orders.length > 0) {
    return (
      <div className={styles.container}>
        <OrderTable
          orders={orders}
          incrementClik={incrementClik}
          decrementClik={decrementClik}
          removeProductFromOrder={removeProductFromOrder}
          totalAmountCount={totalAmountCount}
          tableValue={tableValue}
          saveOrderToKitchen={saveOrderToKitchen}
  
        />
      </div>
    );
  } else {
    return (
      <>
      <section  className={styles.noMessageContainer}>
        <p className={styles.orderMessage}>No hay órdenes</p>
        <img
          src={orderMessage}
          alt="Imagen aún no hay pedidos"
          className={styles.orderMessageImg}
        ></img>
      </section>
      </>
    );
  }
};

export default OrdersView;
