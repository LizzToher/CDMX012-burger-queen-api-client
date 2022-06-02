import { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/products';
  
const fetchProducts = () => {
    const [products, setProducts] = useState(null);
    
    useEffect(() => {
          console.log('useefect product');
          api.get(url).then((res) => {
            console.log('desde products hook',res);
            if (!res.err) {
              setProducts(res);
            } else {
              setProducts(null);
            }
          });
        }, []);
  
    return [products];
  };

export default fetchProducts;
