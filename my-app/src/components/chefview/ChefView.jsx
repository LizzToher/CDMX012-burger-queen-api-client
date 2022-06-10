import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { CHEF } from '../../common/constants';
import PendingOrders from './PendingOrders';
import fetchOrders from '../../hooks/FetchOrders';
// import updateOrders from '../../hooks/UpdateOrder';


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

  // const getTotalOrders = () => {
  //   const totalOrders = orders.map((order) => order.products);
  //   console.log(totalOrders.flat());
  // };

  const updateOrderStatus = (product) => {
    console.log(orders);
    console.log(product);
    //getTotalOrders();
    // const orderIndex = orders.find((element) => element.id === order.id);
    // console.log(orders);
    // console.log(orderIndex);
    
  };
  
  //ENCONTRAR EL OBJETO ESPECIFICO DENTRO DEL ARRAY
  //ACCEDER AL OBJETO Y APLICAR REEMPLAZO
  //ACTUALIZAR EL OBJETO


  // const updatedOrder = newOrderArray.map((order) => {
  //   if (order.id === newOrderArray.id) {
  //     const completedOrder = order.products.map((element) =>{
  //       return Object.assign({}, {...element, status: element.status.replace('pendiente', 'completado')});
  //     });
  //     console.log('desde chef updated', updatedOrder);
  //   }
  // });
  // updateOrders(updatedOrder);


    const handleLogOut = async (e) => {
        e.preventDefault();
        await logout();
        setUserRol(null);
        navigate('/');
      };    

      const updateOrderStatus= () => {
        const orderDetail = Object.assign({}, { date: new Date(), status: 'completado', products: orders });
        console.log('before call saveorders', orderDetail);
        addOrders(orderDetail);
      };
   

  return (
    <>
      <PendingOrders orders={orders} handleLogOut={handleLogOut} updateOrderStatus={updateOrderStatus} />
    </>
  );
};

export default ChefView;
