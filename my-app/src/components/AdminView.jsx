import React, { useState, useEffect, useContext} from 'react';
import logoSmall from '../assets/logo-nav_small.png';
import styles from './AdminView.module.css';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { ADMIN } from '../common/constants';
import { UserContext } from '../context/UserProvider';

const AdminView = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { userRol, setUserRol, logout } = useContext(UserContext);
  useEffect(() => {
    if (!userRol || userRol.doc.rol !== ADMIN) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

    useEffect(() => {
        const user = auth.currentUser;
        if(user){
        const data = query(collection(db, 'users'));
        console.log(data);
        let usersArray = [];
        onSnapshot(data, (querySnapshot) => {
          querySnapshot.docs.map(doc => {
            usersArray.push(
              {
                id: doc.id,
                data: doc.data()
              }
            );
          });
          setUsers(usersArray);
          console.log(usersArray);
        });
        }
      }, []);

      const handleLogOut = async (e) => {
        e.preventDefault();
        await logout();
        setUserRol(null);
        navigate('/');
      };

  return (
    // <div className={styles.mainContainer}>
   <>
 <div className={styles.container}>
    <section className={styles.container}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
    <section className={styles.buttonContainer}>
        <button className={styles.button}>Trabajadores</button>
        <button className={styles.button}>Productos</button>
        <button className={styles.button} alt='logout' onClick={handleLogOut}>CS</button>
    </section>
    </section>
 </div>
     {
         users.map(user => (
         <section  className={styles.table} key={user.id}>
        <table className={styles.cell}>
          <h2>{user.data.name} {user.data.lastname} {user.data.rol}</h2>
        </table>
      </section>
    ))
    };
   </>

//   </div>
  );
};

export default AdminView;
