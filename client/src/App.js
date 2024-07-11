import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from './Pages/Page3';
import "./App.css"
import Sign from './Pages/Sign';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Sucess from './Pages/Sucess';
import Cancel from './Pages/Cancel';
import Admin from './Pages/Admin';



const App = () => {
  return (
    <>
     
   <Routes>
    <Route path='/page' element={<Page1/>}/>
    <Route path='/product' element={<Page2/>}/>
    <Route path='/about' element={<Page3/>}/>
    <Route path='/cart' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/sucess' element={<Sucess/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/cancel' element={<Cancel/>}/>
    <Route path='/' element={<Sign/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes> 
  
   
    </>
  )
}

export default App
