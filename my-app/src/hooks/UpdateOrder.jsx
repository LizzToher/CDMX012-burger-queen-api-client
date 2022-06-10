let url = 'http://localhost:5000/orders';

const updateOrders = (newOrderArray) => {

  fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(newOrderArray),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  return [newOrderArray];
};

export default updateOrders;
