import React, { createContext, useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

export const UserContext = createContext();
export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('there is not auth provider');
  return context;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userRol, setUserRol] = useState('');

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () =>
  signOut(auth);

  const getUserWithRol = (currentUser) => {
    const userRolData = query(collection(db, 'users'), where('email', '==', currentUser.email));
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
      setUserRol(userRolArray[0]);
      console.log('getuserwithrol', userRolArray[0]);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getUserWithRol(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signup, login, user, userRol, setUserRol, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
