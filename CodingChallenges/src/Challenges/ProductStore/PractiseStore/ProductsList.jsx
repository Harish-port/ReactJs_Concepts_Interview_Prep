import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductsList() {
    const [loading, setloading] = useState(false);
    const [productList, setproductList] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetchProducts()
    }, []);
    const fetchProducts = async () => {
        try {
            setloading(true)
            const result = await fetch('https://dummyjson.com/products');
            const response = await result.json()
            console.log(response.products);

            setproductList(response.products)
        } catch (error) {
            setloading(false)
            console.log(error);

        } finally {
            setloading(false)
        }
    }
    const handleProductList = (selectedProdcutID) => {
        navigate(`/products/${selectedProdcutID}`)
    }
    return (
        <div>
            {productList.map(product => (
                <div style={{ display: 'flex' }} key={product.id} onClick={() => handleProductList(product.id)}>
                    {product.title}
                </div>
            ))}
        </div>
    )
}

export default ProductsList