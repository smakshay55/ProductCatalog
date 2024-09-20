import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
