import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';
import fetchProducts from '../../hooks/Products';
import OrdersView from './OrdersView';

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
    const productInOrder = orders.find(order => order.id === product.id);
    if (productInOrder === undefined) {
      const newOrders = [...orders, product];
      setOrders(newOrders);
    } else {
      const removedDuplicateProduct = ([...orders.slice(0, productInOrder), ...orders.slice(productInOrder + 1)]);
      setOrders(removedDuplicateProduct);
    }
  };

  return (

    <><div className={styles.container}>
      <section className={styles.container}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <section className={styles.buttonContainer}>
          <button className={styles.button}>Menú</button>
          <button className={styles.button} alt='logout' onClick={handleLogOut}>CS</button>
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
        <OrdersView orders={orders} setOrders={setOrders} />
      </div>
    </>
  );
};
export default WaiterView;
