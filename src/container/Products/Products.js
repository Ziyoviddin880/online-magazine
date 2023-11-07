import "./products.scss";
import { ProductsContext } from "../../App";
import { useContext } from "react";

function Products() {
  const context = useContext(ProductsContext);
  return (
    <div className="all-products">
      {console.log(context)}
      <div className="products-title">All Products</div>
      {context.loading && (
        <div className="loading">
          <img src="images/loading-gif.gif" alt="" />
        </div>
      )}
      <div className="products-container">
        {context.products.length > 0
          ? context.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-img">
                  <img src={product.image} alt="Product" />
                </div>

                <div className="product-info">
                  <div className="price">
                    <span>Price: </span> {product.price}$
                  </div>
                  <div className="rating">
                    <div className="rate">
                      <span>Rate: </span> {product.rating.rate}
                    </div>
                    <div className="count">
                      <span>Count: </span> {product.rating.count}
                    </div>
                  </div>
                  <button className="product-btn">Button</button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Products;
