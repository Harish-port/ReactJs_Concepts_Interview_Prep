import { useEffect, useState } from "react";
import './style.css';

const BackendPaginationPractice = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const fetchData = async () => {
        const result = await fetch(`https://dummyjson.com/products?limit=10?skip=${page * 10 - 10}`);
        const data = await result.json();
        if (data && data.products) {
            setProducts(data.products)
        }
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePagination = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
            setPage(selectedPage)
    }

    return (
        <>
            {products.length > 0 && (
                <div className="products-display" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", margin: "10px" }}>
                    {products.slice(page * 10 - 10, page * 10).map((product) => (
                        <div style={{ padding: '10px', textAlign: "center", backgroundColor: "lightgray", borderRadius: "10px" }}>
                            <img style={{ height: "250px", width: "300px", objectFit: "cover" }} src={product.images[0]} alt="NA" />
                            <h4>
                                {product.title}
                            </h4>
                        </div>
                    ))}
                </div>
            )}
            {products.length > 0 && (
                <div style={{ display: "flex", width: "auto", justifyContent: "center" }}>
                    <div className="pagination-items">
                        <span onClick={() => handlePagination(page - 1)}>Previous</span>
                        {[...Array(products.length / 10)].map((_, i) => (
                            <span className={page === i + 1 ? "active_page" : ""} key={i} onClick={() => handlePagination(i + 1)}>{i + 1}</span>
                        ))}
                        <span onClick={() => handlePagination(page + 1)}>Next</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default BackendPaginationPractice;