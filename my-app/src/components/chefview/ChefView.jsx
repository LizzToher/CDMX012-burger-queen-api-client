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
  const updatedOrder = Object.assign({}, { ...orders });
  const [ordersToView, setOrdersToView] = useState(updatedOrder);
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
    console.log('lo que paso por parametro para la vista que quiero que se vea', orderToUpdate);
    console.log('orden clonada', ordersToView);
    console.log('este arreglo viene del hook fetchorder', orders);
    
    //crear una copia de orders->orders2

    const updatedProduct = [...orders];
     const findIdOrder = updatedProduct.find((order) => order.id === orderToUpdate.id);
    if(findIdOrder){
      console.log(' posicion del producto', updatedProduct);
       const putUpdatedProduct = [orderToUpdate];
       console.log(putUpdatedProduct);
       setOrdersToView(putUpdatedProduct);
    }
    // console.log('index del filtrado', updatedProduct);
    // //...
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
