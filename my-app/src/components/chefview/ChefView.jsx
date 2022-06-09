import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { CHEF } from '../../common/constants';
import PendingOrders from './PendingOrders';
import fetchOrders from '../../hooks/FetchOrders';


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

      const updateOrderStatus= () => {
        const orderDetail = Object.assign({}, { date: new Date(), status: 'completado', products: orders });
        console.log('before call saveorders', orderDetail);
        addorders(orderDetail);
      };
   
  return (
    <>
        <PendingOrders orders={orders} handleLogOut={handleLogOut}/>
    </>
  );
};

export default ChefView;
