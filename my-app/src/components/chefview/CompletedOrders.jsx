import React from 'react';
import CompletedTable from './CompletedTable';

const CompletedOrders = ({ orders, updateOrderStatus }) => {
  return (

    <>
      <CompletedTable orders={orders} updateOrderStatus={updateOrderStatus} />

    </>
  );
};

export default CompletedOrders;