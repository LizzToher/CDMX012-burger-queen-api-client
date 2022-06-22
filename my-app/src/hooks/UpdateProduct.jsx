const updateProducts = (productToUpdate) => {

  fetch(`http://localhost:5000/products/${productToUpdate.id}`, {
    method: 'PUT',
    body: JSON.stringify(productToUpdate),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
    });
  return [productToUpdate];
};

export default updateProducts;
