import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
// import AdminView from './components/AdminView';
// import Navbar from './components/Navbar';
import AuthRequiered from './components/AuthRequiered';
import Home from './routes/Home';

const Views = () => {
  return(
    <>
    {/* <Navbar /> */}

    <Routes>
      <Route path='/' element={<Login />} />
      
      <Route path='/home' element={
        <AuthRequiered>
         <Home />
        </AuthRequiered>
      } />
    </Routes>
    
    </>
  );
};
 
export default Views;
