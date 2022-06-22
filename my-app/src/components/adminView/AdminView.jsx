import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase';

// import { ADMIN } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import AdminEmployees from './AdminEmployees';
import AdminProducts from './AdminProducts';
import fetchProducts from '../../hooks/Products';

const AdminView = () => {

    const [users, setUsers] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);
    const [products] = fetchProducts();
    const [navSection, setNavSection] = useState('employees');
    const navigate = useNavigate();
    const { setUserRol, logout } = useContext(UserContext);
  // useEffect(() => {
  //   if (!userRol || userRol.doc.rol !== ADMIN) {
  //     navigate('/');
  //   }
  //   setUserRol(null);
  // }, []);

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
        });
        }
      }, []);

      const handleLogOut = async (e) => {
        e.preventDefault();
        await logout();
        setUserRol(null);
        navigate('/');
      };

      if (navSection === 'employees'){
        return (
          <>
            <AdminEmployees users={users} handleLogOut={handleLogOut}  setNavSection={setNavSection} />
          </>
        );
      } if (navSection === 'products'){
        return( 
          <AdminProducts products={products} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} handleLogOut={handleLogOut} setNavSection={setNavSection} />
        );
      }
};

export default AdminView;
