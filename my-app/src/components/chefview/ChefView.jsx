import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { CHEF } from '../../common/constants';
import PendingOrders from './PendingOrders';
import fetchOrders from '../../hooks/FetchOrders';
import updateOrders from '../../hooks/UpdateOrder';

const ChefView = () => {
  const [orders] = fetchOrders();

  const navigate = useNavigate();
  
  const { userRol, setUserRol, logout } = useContext(UserContext);

  useEffect(() => {
    if (!userRol || userRol.doc.rol !== CHEF) {
      navigate('/');
      setUserRol(null);
    }
  }, []);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout();
    setUserRol(null);
    navigate('/');
  };


  const updateOrderStatus = (order) => {
    console.log('lo que le paso por parametro a la funcion', order);
    const newOrderToUpdate = Object.assign({}, {...order, status: order.status.replace('pendiente','completado')});
    updateOrders(newOrderToUpdate);
    console.log('nueva orden actualizada', newOrderToUpdate);
  };


  //ENCONTRAR EL OBJETO ESPECIFICO DENTRO DEL ARRAY
  //ACCEDER AL OBJETO Y APLICAR REEMPLAZO
  //ACTUALIZAR EL OBJETO


  return (
    <>
      <PendingOrders orders={orders} handleLogOut={handleLogOut} updateOrderStatus={updateOrderStatus} />
    </>
  );
};

export default ChefView;
