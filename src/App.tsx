import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import routes from './routes';
import MyFooter from './components/MyFooter';


function App() {

  const element = useRoutes(routes)
  

  return (
    <div >

      <NavBar/>

      {element}

      <MyFooter/>

    </div>
    
  );
}

export default App;
