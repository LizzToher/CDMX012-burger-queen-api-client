import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import fetchProducts from '../../hooks/Products';
import addOrders from '../../hooks/SaveOrder';
import MenuView from './MenuView';

const WaiterView = () => {
  const [orders, setOrders] = useState([]);
  const [products] = fetchProducts();
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const { userRol, setUserRol, logout } = useContext(UserContext);

  useEffect(() => {
    if (!userRol || userRol.doc.rol !== WAITER) {
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
  
  const saveOrders = () => {
    const orderDetail = Object.assign({}, { date: new Date(), table: 1, status: 'pendiente', products: orders });
    console.log(orderDetail);
    addOrders(orderDetail);
    setStatus('sent');
    setOrders([]);
  };

  return (
    <>
      <MenuView products={products} saveOrders={saveOrders} orders={orders} setOrders={setOrders} handleLogOut={handleLogOut} status={status} setStatus={setStatus} />
    </>
  );
};
export default WaiterView;
