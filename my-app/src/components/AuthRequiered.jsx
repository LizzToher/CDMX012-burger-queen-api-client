import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserProvider';

const AuthRequiered = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return navigate('/');
}, []);

  return <>{children}</>;
};

/*
function MyComponent() {
    const navigation = useNavigation();

    
}*/

export default AuthRequiered;

/*
export const ProtectedRoute = ({children}) => {

    const { user } = useAuth()
    const history = useHistory()
    if(!user) return history.push('/')

    return <>{children}</>
}
*/
