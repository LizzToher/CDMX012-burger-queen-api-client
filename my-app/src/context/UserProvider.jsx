import React, { createContext, useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import {collection, onSnapshot, query} from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
// import { getDefaultNormalizer } from '@testing-library/react';


export const UserContext = createContext(); 
export const useAuth = () => {  
    const context = useContext(UserContext);
    if (!context) throw new Error('there is not auth provider');
    return context;
  };


//children es el resto de los componentes, esto es para que se sigan mostrando los componentes
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [userRol, setUserRol] = useState('');

    const signup = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
      };
    
      const login = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
      };

  const getUserWithRol = () => {
    const userRolData = query(collection(db, 'users'));
    console.log(userRolData);
    let userRolArray = [];
    onSnapshot(userRolData, (querySnapshot) => {
      querySnapshot.forEach(doc => {
        userRolArray.push(
        {
          id: doc.id,
          doc: doc.data()
        }
        );
      });
       return setUserRol(userRolArray);
     });
    };
   
      
    
      // function setUserWithFirebaseAndRol(currentUser) {
      //   getUserWithRol(currentUser).forEach(rol =>{
          
      //     {
      //       currentUser.uid,
      //       currentUser.email,
      //       currentUser.password,
      //       rol,
      //     }

      //   });
      //     setUserRol(currentUser);
      //     console.log('userData final', userData);
      //   // });
      // }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            // const {email, displayName, uid} = user}
            setUser(currentUser);
            getUserWithRol(currentUser);
           }
          // if (!user){
          //   setUserWithFirebaseAndRol(currentUser);
          // }
           else {
            setUser(null);
          }
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <UserContext.Provider value={{signup, login, user, userRol }}>
        {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
