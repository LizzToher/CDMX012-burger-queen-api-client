import { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/orders';

const fetchOrders = (status) => {
  const [ordersToKitchen, setOrdersToKitchen] = useState(null);
  
  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setOrdersToKitchen(res);
      } else {
        setOrdersToKitchen(null);
      }
    });
  }, [status]);
  return [ordersToKitchen];
};

export default fetchOrders;