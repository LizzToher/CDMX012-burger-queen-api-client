import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserProvider';
import { WAITER, CHEF } from '../common/constants';

const Home = () => {

  const validateUser = () => {
    if (userRol.doc.rol === 'admin') {
      navigate('/AdminView');
    }
    if (userRol.doc.rol === WAITER) {
      navigate('/WaiterView');
    }
    if (userRol.doc.rol === CHEF) {
      navigate('/ChefView');
    }
    if (!userRol || !userRol.doc.rol) {
      navigate('/');
    }
  };

  const navigate = useNavigate();
  const { userRol } = useContext(UserContext);
  useEffect(() => {
    validateUser();
  }, []);

  return ('');
};

export default Home;
