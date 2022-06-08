import {  useEffect } from 'react';
import { helpHttp } from '../helper/helpHTTP';

let api = helpHttp();
let url = 'http://localhost:5000/orderToKitchen';
  
const addOrderToKitchen = ({prueba}) => {
 
    useEffect(() => {
      console.log('useefect ordertokitchen');

      let options = {
        method: 'POST',
        body: prueba, 
        // body:  JSON.stringify(prueba), 
        Headers: {'content-type':'application/json'},
      };

      api.post(url, options).then((res)=>{
        console.log(res);
        if (!res.err) {
          // Object.assign({}, { ...orders});
          console.log('enviando data', res);

        } else {
          console.log('error enviado data', res);
        }
      });
   
        }, []);
  
    return [prueba];
  };

export default addOrderToKitchen;







// const fetchOrderToKitchen = (products) => {
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   console.log(error);
//     // orderToKitchen.id = Date.now();

//     useEffect(() => {
//       console.log('useefect ordertokitchen');
//       let options = {
//         body: products,
//         Headers: {'content-type':'application/json'},
//       };

//       api.post(url, options).then((res)=>{
//         console.log(res);
//         if (!res.err) {
//           setProduct([...product, res]);
//         } else {
//           setError(res);
//         }
//       });
   
//         }, []);
  
//     return [products];
//   };

// export default fetchOrderToKitchen;