import React, { useState, useEffect } from 'react';
import logoSmall from '../assets/logo-nav_small.png';
import styles from './Home.module.css';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';

const AdminView = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;
        const uid = user.uid;
        const getData = query(collection(db, 'users'), orderBy('date', 'desc'));
        onSnapshot(getData, (querySnapshot) => {
          let usersArray = [];
          querySnapshot.docs.map(doc => {
            usersArray.push(
              {
                id: doc.id,
                data: doc.data()
              }
            );
          });
          setUsers(usersArray);
        });
    
      }, []);
  return (
    // <div className={styles.container}>
   <>
 <div className={styles.container}>
    <section className={styles.container}>
        <img className={styles.logosmall} src={logoSmall} alt="smal logo" />
    <section className={styles.buttonContainer}>
        <button className={styles.button}>Trabajadores</button>
        <button className={styles.button}>Productos</button>
    </section>
    </section>
 </div>
    <ul>
     {users.map(user => (
     <section key={user.id}>
     <article>
        <h2>{user.data.name}</h2>
        <h2>{user.data.lastname}</h2>
        <h2>{user.data.rol}</h2>
    </article>
    </section>
))}
    </ul>
   </>

//   </div>
  );
};

export default AdminView;

