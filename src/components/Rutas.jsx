import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Workout from '../pages/Workout';
import DetallePlan from '../pages/DetallePlan';
import Shop from '../pages/Shop';


const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/plan' element={<Workout/>}></Route>
            <Route path='/plan/:id' element={<DetallePlan/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
    </>
  )
}

export default Rutas