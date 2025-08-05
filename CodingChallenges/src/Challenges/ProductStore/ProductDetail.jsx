import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    console.log(id, "ProductDetail");
    useEffect(() => {
        fetchProductSingleDetail()
    }, [])
    const fetchProductSingleDetail = async () => {
        try {
            setLoading(true)
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const response = await result.json()
            setProducts(response);
        } catch (error) {
            setLoading(false)
            console.log(error);
            setProducts([])
        } finally {
            setLoading(false)
        }
    }
    if (loading) return ".....Loading";
    console.log(products, "productssdjalkseh");
    const redirectToProductPage = () => {
        navigate('/products')
    }
    return (
        <div>
            <div className="all-products" key={products.id}>
                <img src={products.thumbnail} loading='lazy' alt="product image" />
                <p>{products.title}</p>
                <p>{products.description}</p>
                <a onClick={redirectToProductPage}>Back to product page</a>
            </div>
        </div>
    )
}

export default ProductDetail