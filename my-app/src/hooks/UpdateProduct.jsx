const updateProducts = (productToUpdate) => {
    console.log('parametro que recibe hook editar producto', productToUpdate);
  
    fetch(`http://localhost:5000/products/${productToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify(productToUpdate),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>{
      console.log('Success:', response);
    } );
    console.log('id hook editar producto', productToUpdate);
    return [productToUpdate];
  };
  
  export default updateProducts;
  