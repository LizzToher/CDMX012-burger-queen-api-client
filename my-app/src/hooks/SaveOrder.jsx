let url = 'http://localhost:5000/orders';

const addOrders = (newOrderArray) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newOrderArray),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  return [newOrderArray];
};

export default addOrders;

