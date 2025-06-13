import { useEffect, useState } from "react";

const FrontEndPaginationPractice = () => {
    const [products, setProducts] = useState([]);
    const [Ppagination, setPagination] = useState(1);
    const fetchData = async () => {
        const result = await fetch("https://dummyjson.com/products?limit=100");
        const data = await result.json();
        if (data && data.products) {
            setProducts(data.products)
        }
        console.log(data);

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {products.length > 0 && (
                <div className="products-display" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", margin: "10px" }}>
                    {products.slice(0, 5).map((product) => (
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
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>Previos</span>
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>1</span>
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>1</span>
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>1</span>
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>1</span>
                    <span style={{ padding: "10px", cursor: "pointer", color: "white", backgroundColor: "darkgray", border: "1px solid lightgrey" }}>Next</span>
                </div>
            )}
        </>
    )
}

export default FrontEndPaginationPractice;