import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../AdminView.module.css';
import logoSmall from '../../../assets/logo-nav_small.png';
import logout from '../../../assets/logout.png';
import updateProducts from '../../../hooks/UpdateProduct';
// import fetchProducts from '../../../hooks/Products';
import { useEffect } from 'react';


const EditProduct = ({ products, setNavSection, handleLogOut }) => {
  const { id } = useParams();
  const url = `http://localhost:5000/products/?id=${id}`

  useEffect((
    // haces el fetch
    //el fetch apunta a la url
    // usas el setState de setProductToEdit para meter la info del producto
  )=>[])
  // use effect
  // const [products] = fetchProducts();
  const [productToEdit, setProductToEdit] = useState(''); //  useState(null)
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  
  console.log('id de lo clickeado', id);
  // console.log('que trae el map en el edit', product);


  const onSubmit = (e) => {
    e.preventDefault();
    const editedProduct = {
      productToEdit: productToEdit,
      price: price,
      category: category
    };
    console.log(e);
    updateProducts(editedProduct);
  };


  // ultimo el haddle que cambie el state productToEdit para cada input o de form

  return (
    // Renderizado condicional para saber si hay productto Edit y es diferente de null
    // cuando deteste s que es diferente de null ahora si cargar el form
    // los inputs de form tiene que tener value={lo que hay en tu state}
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2 className={styles.menuLetter} onClick={() => setNavSection('employees')}>
          Trabajadores
        </h2>
        <h2 className={styles.menuLetter} onClick={() => setNavSection('products')}>
          Productos
        </h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <fieldset className={styles.formLogin}>
        {/* products.filter((product) => product.id === id) */}
        {products.map((product) => { 
          if(product.id === id){ 
            return (
              <>
             <form  onSubmit={onSubmit}  key={id}> 
                <input type='text' className={styles.input} placeholder='Producto' value={productToEdit} onChange={(e) => setProductToEdit(e.target.value)} />
    
                <input type='number' className={styles.input} placeholder='Precio' value={price} onChange={(e) => setPrice(e.target.value)} />
    
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value={'desayuno'}>Desayuno</option>
                  <option value={'almuerzo'}>Almuerzo</option>
                </select>
    
                <button className={styles.loginbtn} type="submit">
                  Editar producto
                </button>
              </form> 
              </>
          );
            }
        // console.log(products);
        // console.log('esto es el id', product.id); */}
         })
       }
              </fieldset>
    </div>
  );
};

export default EditProduct;