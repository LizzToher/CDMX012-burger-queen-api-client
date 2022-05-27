import React, {useContext} from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './Login';
// import AdminView from './components/AdminView';
// import Navbar from './components/Navbar';
// import AuthRequiered from './components/AuthRequiered';
import AdminView from '../components/AdminView';
import { UserContext } from '../context/UserProvider';
import WaiterView from '../components/WaiterView';

const Views = () => {

  const { user } = useContext(UserContext);
  let userRole = null;
  if (user?.rol) {
    userRole = user.rol;
  }
  return(
    <>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Login />} />;
      {user && <Route exact path="/admin" element={<AdminView />} />}
      {userRole === 'admin' && (
      <Route exact path='waiter' element={<WaiterView />} />
      )};
       



      {/* <Route path='/home' element={
        <AuthRequiered>
         <Home />
        </AuthRequiered>
      } /> */}
    </Routes> 
    
    </> 
  );
};

export default Views;
