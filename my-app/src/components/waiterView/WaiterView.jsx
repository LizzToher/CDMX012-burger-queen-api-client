import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../../common/constants';
import { UserContext } from '../../context/UserProvider';
import fetchProducts from '../../hooks/Products';
import addorders from '../../hooks/SaveOrder';
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

  const saveOrders = (orders) => {
    const savedOrder = orders.map((order) => {
      const orderDetail = Object.assign({}, { product: order.product, quantity: order.quantity, date: order.date, table: order.table, status: 'pendiente' });
      addorders(orderDetail);
      setStatus('sent');
      setOrders([]);
      console.log(savedOrder);
    });
  };

  return (
    <>
      <MenuView products={products} saveOrders={saveOrders} orders={orders} setOrders={setOrders} handleLogOut={handleLogOut} status={status} setStatus={setStatus} />
    </>
  );
};
export default WaiterView;
