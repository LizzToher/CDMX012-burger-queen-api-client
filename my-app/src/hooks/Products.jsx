import { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/products';

const fetchProducts = (deleteStatus) => {
  console.log('parametro que recibe product hook', deleteStatus);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log('useefect product');
    api.get(url).then((res) => {
      console.log('respuesta desde products hook', res);
      if (!res.err) {
        setProducts(res);
      } else {
        setProducts(null);
      }
    });
  }, [deleteStatus]);

  return [products];
};

export default fetchProducts;
