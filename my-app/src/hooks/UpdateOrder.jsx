const updateOrders = (orderToUpdate) => {

  fetch(`http://localhost:5000/orders/${orderToUpdate.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: orderToUpdate.status
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
    });
  return [orderToUpdate];
};

export default updateOrders;
