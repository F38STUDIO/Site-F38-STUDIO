import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Error from './pages/error';
import HomeCatalogPage from './pages/HomeCatalogPage'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import ProductDetailPage from './pages/ProductDetailPage'



export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route index element={<HomeCatalogPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/product/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error />} /> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);