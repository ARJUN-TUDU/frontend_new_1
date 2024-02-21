import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import MyMap from './MyMap';
import Practice_api_1 from './Practice_api_1';

import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import Order from './Order';
function App() {
  
 



  return (
     <BrowserRouter>
     
     <Routes>

        <Route path = "/home" element = {<Practice_api_1/>} />
        <Route path = "/Orders/:items" element = {<Order/>}/>



     </Routes>
     
     
     </BrowserRouter>
  );
}

export default App;
