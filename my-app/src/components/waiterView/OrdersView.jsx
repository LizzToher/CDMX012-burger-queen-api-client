// import React from 'react';
// import styles from './WaiterView.module.css';

// const OrdersView = ({ orders }) => {
//   // const [order, setOrder] = useState([]);

//   // const removeProductFromOrder = (productId) => {
  
//   //   const orderIndex = orders.findIndex(order => order.id === productId.id);
   
//   //   const removedProduct = ([...orders.slice(0, orderIndex), ...orders.slice(orderIndex + 1)]);
//   //   setOrder(removedProduct);
//   //   console.log('desde removeProductFromOrder', order);
//   // };

//   return (
//     <section className={`${styles.split} ${styles.right}`}>
//       <section className={styles.centered}>
//         <h1 className={styles.buttonMenu}>Órdenes</h1>
//       </section>
//       <section>
//         {orders &&
//           orders.map((product) => {

//             return (
//               <section key={product.id} className={styles.menuContainer} >
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Producto</th>
//                       <th>Cantidad</th>
//                       <th>Precio</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>{product.product}</td>
//                       <td>cantidad</td>
//                       <td>${product.price}</td>
//                       <td>
//                         <button onClick={() => orders}>Eliminar</button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </section>
//             );
//           })
//         };
      
//       </section>
//     </section>
         
//   );
//       };

// export default OrdersView;
