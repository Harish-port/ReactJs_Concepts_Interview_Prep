import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import ProductsList from './ProductsList'
import ProductDetail from './ProductDetail';

function PracticeMainProductPage() {
    return (
        <Router>
            <nav>
                <NavLink to='/' end>
                    Home
                </NavLink>
                <NavLink to='/products'>
                    Products
                </NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<ProductsList />}/>
                <Route path='/products/:id' element={<ProductDetail />}/>
            </Routes>
        </Router>
    )
}

export default PracticeMainProductPage