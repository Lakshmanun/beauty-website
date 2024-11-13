import React from 'react'
import Home from '../src/components/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/products/Product';
import Footer from './components/testimonials/Footer';
import Testi from './components/testimonials/Testi';
import Login from './components/login/Login';
import Register from './components/login/Register';
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/features' element={<Testi />} />
          <Route path='/aboutus' element={<Footer />} />

        </Routes>



      </BrowserRouter>
    </>
  )
}
