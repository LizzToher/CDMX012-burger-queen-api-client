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
    const updatedOrder = Object.assign({}, { ...order, status: 'completado' });
    updateOrders(updatedOrder);
  };

  return (
    <>
      <PendingOrders orders={orders} handleLogOut={handleLogOut} updateOrderStatus={updateOrderStatus} />
    </>
  );
};

export default ChefView;
