import React, { useEffect, useState } from 'react'

function PracticePagination() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        if (data && data.products) {
            setProducts(data.products);
        }
        console.log(data);
    };
    console.log((products.length / 10), ">>>>");
    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
            setPage(selectedPage)
    }
    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 10 - 10, page * 10).map((product) => {
                        return (
                            <span className="products__single" key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <span>{product.title}</span>
                            </span>
                        );
                    })}
                </div>
            )}
            {products.length > 0 && (
                <div className="pagination" onClick={() => selectPageHandler(page - 1)} ><span>Previous</span>
                    {[...Array(products.length / 10)].map((product, index) => (
                        <span
                            className={page === index + 1 ? "pagination__selected" : ""}
                            key={index} onClick={() => selectPageHandler(index + 1)}>
                            {index + 1}
                        </span>
                    ))}
                    <span onClick={() => selectPageHandler(page + 1)}>Next</span></div>
            )}
        </div>
    )
}

export default PracticePagination