const deleteProduct = (productToDelete) => {
    console.log('parametro que recibe hook delete', productToDelete);
  
      fetch(`http://localhost:5000/products/${productToDelete.id}`, {
        method: 'DELETE',
        body: JSON.stringify(productToDelete),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>{
        console.log('Success:', response);
      } );
      console.log('id hook delete', productToDelete.id);
      return [productToDelete];
  };
  
  export default deleteProduct;
  