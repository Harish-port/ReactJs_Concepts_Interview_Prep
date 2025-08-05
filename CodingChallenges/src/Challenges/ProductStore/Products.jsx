import React, { useEffect, useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const result = await fetch('https://dummyjson.com/products');
            const response = await result.json()
            setProducts(response.products);
        } catch (error) {
            setLoading(false)
            console.log(error);
            setProducts([])
        } finally {
            setLoading(false)
        }
    }
    if (loading) return ".....Loading";
    const handleViewMore = (productId) => {
        navigate(`/products/${productId}`);
    }
    console.log(products);
    return (
        <div className='product-list-container'>
            <h1>Product List</h1>
            <div className='product-list-display'>
                {products.map((product) => (
                    <div className="all-products" key={product.id}>
                        <img src={product.thumbnail} loading='lazy' alt="product image" />
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <a onClick={() => handleViewMore(product.id)}>View More</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products