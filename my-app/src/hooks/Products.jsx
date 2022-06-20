import { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/products';

const fetchProducts = (status) => {
  console.log('parametro que recibe product hook', status);
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
  }, [status]);

  return [products];
};

export default fetchProducts;
