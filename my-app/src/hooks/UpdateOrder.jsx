const updateOrders = (orderToUpdate) => {
  console.log('parametro que recibe hook', orderToUpdate);

  fetch(`http://localhost:5000/orders/${orderToUpdate.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: 'completado'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  console.log('id hook', orderToUpdate.id);
  return [orderToUpdate];
};

export default updateOrders;
