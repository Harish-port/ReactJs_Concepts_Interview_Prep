import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import './style.css'
import ProductDetail from './ProductDetail';
function Main() {
    return (
        <div>
            <Router>
                <nav>
                    <NavLink end className="nav-link" to='/'>Home</NavLink>
                    <NavLink className="nav-link" to='/products'>Products</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Main