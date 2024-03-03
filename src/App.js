import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';

import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import MyNav from './component/MyNav';
import Carss from './Blocks/Carss';
import Home from './pages/Home';

import Menu from './Blocks/Menu';
import Posts from './pages/Posts';
import Gallery from './pages/Gallery';
import Events from './pages/Events';

function App() {
  
 



  return (
     <BrowserRouter>
      
      <MyNav/>
      <Carss/>
      <Menu/>
     
     <Routes>
        
        <Route path = "/" element = {<Home/>} />
        <Route path = "/posts" element = {<Posts/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
        <Route path = "/events" element = {<Events/>}/>
        
        
       
   


     </Routes>
     
     
     </BrowserRouter>
  );
}

export default App;
