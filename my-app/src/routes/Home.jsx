import React, { useState, useEffect } from 'react';
import logoSmall from '../assets/logo-nav_small.png';
import styles from './Home.module.css';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';

const AdminView = () => {

    const [users, setUsers] = useState([]);
    
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

  return (
    // <div className={styles.mainContainer}>
   <>
 <div className={styles.container}>
    <section className={styles.container}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
    <section className={styles.buttonContainer}>
        <button className={styles.button}>Trabajadores</button>
        <button className={styles.button}>Productos</button>
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