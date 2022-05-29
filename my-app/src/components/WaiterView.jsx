import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../common/constants';
import { UserContext } from '../context/UserProvider';
import styles from './WaiterView.module.css';
import logoSmall from '../assets/logo-nav_small.png';

const WaiterView = () => {
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
    navigate('/');
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container}>
          <img className={styles.logosmall} src={logoSmall} alt="small logo" />
          <section className={styles.buttonContainer}>
            <button className={styles.button}>Menú</button>
            <button className={styles.button} alt='logout' onClick={handleLogOut}>CS</button>
          </section>
        </section>
      </div>

      <div className={`${styles.split} ${styles.left}`}>
        <div className={styles.centered}>
            <h2>Jane Flex</h2>
            <p>Some text.</p>
        </div>
      </div>

      <div className={`${styles.split} ${styles.right}`}>
        <div className={styles.centered}>
            <h2>John Doe</h2>
            <p>Some text here too.</p>
        </div>
      </div>

    </>



  );
};

export default WaiterView;
