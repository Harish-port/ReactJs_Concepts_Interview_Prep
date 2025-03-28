import { useEffect, useState } from "react";
import "./pagination.css";
const FrontEndPagination = () => {
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
  console.log(products, "products<<<");
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <>
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
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={() => selectPageHandler(page - 1)}
          >
            Previos
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < products.length / 10 ? " " : "pagination__disable"
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            {" "}
            Next{" "}
          </span>
        </div>
      )}
    </>
  );
};

export default FrontEndPagination;
