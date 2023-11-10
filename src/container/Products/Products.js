import "./products.scss";
import { ProductsContext } from "../../App";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Basket from "../basket/Basket";

function Products() {
  const context = useContext(ProductsContext);
  return (
    <div className="all-products">
      <div className="products-title">All Products</div>
      {context.loading && (
        <div className="loading">
          <img src="images/loading-gif.gif" alt="Loading" />
        </div>
      )}
      <div className="products-container">
        {context.data
          ? context.data.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-img">
                  <NavLink to={"products/" + product.id}>
                    <img src={product.image} alt="Product" />
                  </NavLink>
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
      <Basket />
    </div>
  );
}

export default Products;
