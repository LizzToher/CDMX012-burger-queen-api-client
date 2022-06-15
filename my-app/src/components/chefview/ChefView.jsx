import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { CHEF } from '../../common/constants';
import PendingOrders from './PendingOrders';
import fetchOrders from '../../hooks/FetchOrders';
import updateOrders from '../../hooks/UpdateOrder';
// import { useState } from 'react';
// import { helpHttp } from '../../helper/helpHTTP';

const ChefView = () => {
  // const orders = fetchOrders();
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  // const updatedOrder =  {...orders};
  const { userRol, setUserRol, logout } = useContext(UserContext);
  
  useEffect(() => {
    if (!userRol || userRol.doc.rol !== CHEF) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

 
 const [ordersToView] = fetchOrders(status);
 

  
  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
  };
    console.log('ordertoview', ordersToView);

    const updateOrderStatus = (order) => {
      const updatedOrder = Object.assign({}, { ...order, status: 'completado', endDate: new Date() });
      updateOrders(updatedOrder);
      setStatus(!status);
    };
   
  return (
    <>
      <PendingOrders ordersToView={ordersToView}   handleLogOut={handleLogOut} updateOrderStatus={updateOrderStatus} />
    </>
  );
};

export default ChefView;
