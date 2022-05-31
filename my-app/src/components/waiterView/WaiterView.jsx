import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import { helpHttp } from '../../helper/helpHTTP';
import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';


const WaiterView = () => {
  const [category, setCategory] = useState('desayuno');
  console.log(category);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let api = helpHttp();
  let url = 'http://localhost:5000/products';
  const { userRol, setUserRol, logout } = useContext(UserContext);
  useEffect(() => {
    if (!userRol || userRol.doc.rol !== WAITER) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setProducts(res);
      } else {
        setProducts(null);
      }
    });
  }, []);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
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
            <button className={styles.buttonMenu}
               onClick={() => setCategory(products.category)}
              type='submit'>
              Desayunos
            </button>
          
            <button className={styles.buttonMenu} onClick={() => setCategory(products.category)}>
              Almuerzos
            </button>
            </section>

      <section className={styles.tableContainer}>
            <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
            {
              products.map((product) =>{ 
                return (
                    <tr key={product.id} >
                      {console.log(product.id)}
                      <td>{product.product}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                    </tr>
                );
              })
            };
            {/* {category === products.category && } */}
        </tbody>
        </table>
        </section>
  
   </section>
        </section>


        <div className={`${styles.split} ${styles.right}`}>
          <div className={styles.centered}>
            <h1 className={styles.buttonMenu}>Órdenes</h1>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default WaiterView;
