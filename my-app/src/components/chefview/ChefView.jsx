import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { CHEF } from '../../common/constants';
import PendingOrders from './PendingOrders';
import fetchOrders from '../../hooks/FetchOrders';
import updateOrders from '../../hooks/UpdateOrder';
import { useState } from 'react';

const ChefView = () => {
  const [orders] = fetchOrders();
  const navigate = useNavigate();
  const [ordersToView, setOrdersToView] = useState();
  const { userRol, setUserRol, logout } = useContext(UserContext);

  useEffect(() => {
    if (!userRol || userRol.doc.rol !== CHEF) {
      navigate('/');
      setUserRol(null);
    }
    setOrdersToView(orders);
  }, [orders]);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
  };

  const updateOrdersToView=(orderToUpdate)=>{
    console.log(orders,orderToUpdate);
    //crear una copia de orders->orders2

    const updatedProduct = orders.findIndex((order) => order.id === orderToUpdate.id);
    console.log('abc', updatedProduct);
    const putUpdatedProduct = Object.assign({}, {updatedProduct});
    setOrdersToView(putUpdatedProduct);
    //...
    //orders2[x]=nuevo valor
    //setOrdersToView(??);
  };

  const updateOrderStatus = (order) => {
    const updatedOrder = Object.assign({}, { ...order, status: 'completado' });
    updateOrders(updatedOrder, updateOrdersToView);
  };
   
  return (
    <>
      <PendingOrders orders={ordersToView} handleLogOut={handleLogOut} updateOrderStatus={updateOrderStatus} />
    </>
  );
};

export default ChefView;
