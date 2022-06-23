let url = 'http://localhost:5000/products';

const addProduct = (newProductArray) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newProductArray),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  return [newProductArray];
};

export default addProduct;
