import {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
import { WAITER } from '../common/constants';

const Home = () => {

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
};

export default Home;
