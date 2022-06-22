import React from 'react';

import CompletedTable from './CompletedTable';

const CompletedOrders = ({ ordersToView, updateOrderStatus }) => {

  console.log('desde completedorder', ordersToView);
  return (

    <>
      <CompletedTable ordersToView={ordersToView} updateOrderStatus={updateOrderStatus} />

    </>
  );
};

export default CompletedOrders;