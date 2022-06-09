import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserProvider';
import Login from './routes/Login';
import AdminView from './components/AdminView';
import WaiterView from './components/waiterView/WaiterView';
import Home from './routes/Home';
import ChefView from './components/chefview/ChefView';

const App = () => {
  const { userRol } = useContext(UserContext);
  console.log('desde app', userRol);
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/adminView' element={<AdminView />} />
      <Route exact path='/waiterView' element={<WaiterView />} />    
      <Route exact path='/chefView' element={<ChefView />} /> 
    </Routes>
  );
};

export default App;
