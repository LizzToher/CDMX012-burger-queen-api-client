import { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/products';

const fetchProducts = (status) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.get(url).then((res) => {
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
