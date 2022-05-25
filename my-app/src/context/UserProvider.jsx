import React, { createContext, useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import { auth } from '../firebase/firebase';


export const UserContext = createContext(); 
export const useAuth = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('there is not auth provider');
    return context;
  };

//children es el resto de los componentes, esto es para que se sigan mostrando los componentes
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const signup = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
      };
    
      const login = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            // const {email, displayName, uid} = user
            setUser(currentUser);
          } else {
            setUser(null);
          }
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <UserContext.Provider value={{ user, setUser, signup, login }}>
        {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
