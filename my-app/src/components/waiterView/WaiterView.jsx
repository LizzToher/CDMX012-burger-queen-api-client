import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';
import fetchProducts from '../../hooks/Products';

const WaiterView = () => {
  const [category, setCategory] = useState('desayuno');
  const [orders, setOrders] = useState([]);
  const [products] = fetchProducts();

  const navigate = useNavigate();
  
  const { userRol, setUserRol, logout } = useContext(UserContext);

  useEffect(() => {
    if (!userRol || userRol.doc.rol !== WAITER) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
  };

  const addProductToOrder = (product) => {
    const newOrders = [...orders, product];
    setOrders(newOrders);
    console.log('desde addProductToOrder', product.product);
  };

  const removeProductFromOrder = (productId) => {
    const orderIndex = orders.findIndex(order => order.id === productId);
    const removedProduct = ([...orders.slice(0, orderIndex), ...orders.slice(orderIndex + 1)]);
    setOrders(removedProduct);
    console.log('desde removeProductFromOrder', orders);
  };

  return (

    <><div className={styles.container}>
      <section className={styles.container}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <section className={styles.buttonContainer}>
          <button className={styles.button}>Menú</button>
          <button className={styles.buttonLogout} alt='logout' onClick={handleLogOut}>CS</button>
        </section>
      </section>
    </div>

      <div className={`${styles.split} ${styles.left}`}>
        <section className={styles.centered}>
          <section className={styles.leftContainer}>

            <section className={styles.leftButtonContainer}>
              <button className={styles.buttonMenu} onClick={() => setCategory('desayuno')} >
                Desayunos
              </button>

              <button className={styles.buttonMenu} onClick={() => setCategory('almuerzo')}>
                Almuerzos
              </button>
            </section>

            <section className={styles.tableContainer}>


              {products &&
                products
                  .filter((p) => category === p.category)
                  .map((product) => {
                    return (
                      <section key={product.id} className={styles.menuContainer} onClick={() => addProductToOrder(product)}>
                        <h2>{product.product}</h2>
                        <h3>${product.price}</h3>
                      </section>
                    );
                  })
              }
            </section>

          </section>
        </section>

        <section className={`${styles.split} ${styles.right}`}>
          <section className={styles.centered}>
            <h1 className={styles.buttonMenu}>Órdenes</h1>
          </section>
          <section className='hola'>
            {orders &&
              orders.map((product) => {
                return (
                  <section key={product.id} className={styles.menuContainer} >
                    <table>
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{product.product}</td>
                          <td>cantidad</td>
                          <td>${product.price}</td>
                          <td>
                            <button onClick={() => removeProductFromOrder(product.id)}>Eliminar</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                )
              })
            };
          </section>
        </section>
      </div>
    </>
  );
};
export default WaiterView;
