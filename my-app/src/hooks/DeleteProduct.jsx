const deleteProduct = (productToDelete) => {

  fetch(`http://localhost:5000/products/${productToDelete.id}`, {
    method: 'DELETE',
    body: JSON.stringify(productToDelete),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
    });
  return [productToDelete];
};

export default deleteProduct;
