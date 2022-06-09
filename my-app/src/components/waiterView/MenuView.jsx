import React, { useState } from 'react';
import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import OrdersView from './OrdersView';

const MenuView = ({ products, orders, setOrders, handleLogOut, saveorders }) => {
  const [category, setCategory] = useState('desayuno');
  const [tableValue, setTableValue] = useState(1);

  const addProductToOrder = (product) => {
    const productInOrder = orders.find((order) => order.id === product.id);
    if (productInOrder === undefined) {
      const newOrders = [...orders, { ...product, quantity: 1, table: tableValue, status: 'pendiente', date: new Date() }];
      setOrders(newOrders);
      console.log(newOrders);
    } else {
      const removedDuplicateProduct = [
        ...orders.slice(0, productInOrder),
        ...orders.slice(productInOrder + 1),
      ];
      setOrders(removedDuplicateProduct);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <img className={styles.logosmall} src={logoSmall} alt="small logo" />
          <h2 className={styles.menuLetter}>Menú</h2>
          <img
            className={styles.logout}
            src={logout}
            alt="logout"
            onClick={handleLogOut}
          />
        </header>

        <div className={styles.menuOrderContainer}>
          <article className={`${styles.split} ${styles.left}`}>
              <section className={styles.leftContainer}>
                <section className={styles.leftButtonContainer}>
                  <button
                    className={styles.buttonMenu}
                    onClick={() => setCategory('desayuno')}
                  >
                    Desayunos
                  </button>
                  <button
                    className={styles.buttonMenu}
                    onClick={() => setCategory('almuerzo')}
                  >
                    Almuerzos
                  </button>
                </section>
                <section className={styles.tableNumber}>
                  <p>Mesa:</p>
                  <select className={styles.selectValue} onChange={(e) => setTableValue(e.target.value)}>
                    <option value={1} selected>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </section>
                <section className={styles.deployedMenu}>
                  {products &&
                    products
                      .filter((p) => category === p.category)
                      .map((product) => {
                        return (
                          <section
                            key={product.id}
                            className={styles.menuProduct}
                            onClick={() => addProductToOrder(product)}
                          >
                            <h2>{product.product}</h2>
                            <h3>${product.price}</h3>
                          </section>
                        );
                      })}
                </section>
              </section>
          </article>
        </div>
      </div>
      <OrdersView
        style={[styles.split, styles.right]}
        orders={orders}
        setOrders={setOrders}
        tableValue={tableValue}
        saveorders={saveorders}
      />
    </>
  );
};
export default MenuView;
