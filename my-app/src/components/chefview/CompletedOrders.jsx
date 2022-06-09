import React from 'react';
import styles from './ChefView.module.css';
import CompletedTable from './CompletedTable';

const CompletedOrders = ({orders}) => {
  return (
    <div className={styles.right}>
      <CompletedTable  orders={orders}/>

    </div>
  );
};

export default CompletedOrders;