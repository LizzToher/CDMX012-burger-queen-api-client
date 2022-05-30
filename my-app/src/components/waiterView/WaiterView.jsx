import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import { db, auth } from '../../firebase/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import styles from './WaiterView.module.css';
import logoSmall from '../../assets/logo-nav_small.png';

const WaiterView = () => {
  const [breakfast, setBreakfast] = useState([]);
  const navigate = useNavigate();
  const { userRol, setUserRol, logout } = useContext(UserContext);
  useEffect(() => {
    if (!userRol || userRol.doc.rol !== WAITER) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if(user){
    const breakfastData = query(collection(db, 'menu'));
    console.log('data desde mesero', breakfastData);
    let breakfastArray = [];
    onSnapshot(breakfastData, (querySnapshot) => {
      querySnapshot.docs.map(doc => {
        breakfastArray.push(
          {
            id: doc.id,
            data: doc.data()
          }
        );
      });
      setBreakfast(breakfastArray);
      console.log(breakfastArray);
    });
    }
  }, []);
 

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
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
            <button className={styles.buttonMenu} onClick={() => navigate('/Breakfast')}
              type='submit'>
              Desayunos
            </button>
            <button className={styles.buttonMenu} onClick={() => navigate('/Lunch')}
              type='submit'>
              Almuerzos
            </button>
            {
              breakfast.map(doc => (
                <section className={styles.table} key={doc.id}>
                  <table className={styles.cell}>
                    <h2>{doc.data.producto} {doc.data.precio}</h2>
                  </table>
                </section>
              ))
            };
          </section>
       </section>
   
       
        <div className={`${styles.split} ${styles.right}`}>
          <div className={styles.centered}>
            <h1 className={styles.buttonMenu}>Órdenes</h1>
            <p>Some text here too.</p>
          </div>
        </div>
      </div>
      </>

        );

        };
        export default WaiterView;
