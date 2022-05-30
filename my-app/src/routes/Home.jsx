import {useContext, useEffect} from 'react';
// import AdminView from '../components/AdminView';
// import WaiterView from '../components/WaiterView';
// import AdminView from '../components/AdminView';
// import WaiterView from '../components/WaiterView';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../common/constants';
// import Login from './Login';

const Home = () => {
    // console.log('desde home', userRol);
    // const { user } = useAuth();
    const validateUser = () => {
        if(userRol.doc.rol === 'admin'){
            navigate('/AdminView');
        }
        if(userRol.doc.rol === WAITER ){
            navigate('/WaiterView');
        }
        if(!userRol || !userRol.doc.rol){
            navigate('/');
        }
    };
    
    const navigate = useNavigate();
    const { userRol  } = useContext(UserContext);
    useEffect(() => {
        validateUser();
    }, []);
    
    return ('');
//   return (
//       validateUser()
//     <div>
//       Home
//       {/* <AdminView /> */}
//       {/* <WaiterView />
//       {userRol == 'admin' && navigate('/AdminView')} 
//       {userRol == 'waiter' && navigate('/WaiterView')}  */}
//       {/* {userRol === 'admin' ? <AdminView /> : <Login />}
//       {userRol === 'waiter' ? <WaiterView /> : <Login />} */} 
      

//     </div>
      
//   );
};

<<<<<<< HEAD
export default AdminView;

=======
export default Home;
>>>>>>> cac4f11817205d7bbcc4489072814a78aeea09f6
