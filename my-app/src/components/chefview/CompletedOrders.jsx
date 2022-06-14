import React from 'react';
import CompletedTable from './CompletedTable';

const CompletedOrders = ({ orders }) => {
  return (

    <>
      <CompletedTable orders={orders} />

    </>
  );
};

export default CompletedOrders;