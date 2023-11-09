import "./product.scss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch/useFetch";

function Product(props) {
  const { id } = useParams();
  const { data, loading } = useFetch("https://fakestoreapi.com/products/" + id);
  return (
    <>
      <div className="container">
        <div className="product">
          {console.log(loading)}
          {loading && (
            <div className="loading">
              <img src="images/loading-gif.gif" alt="Loading" />
            </div>
          )}
          {data && (
            <div className="product-element">
              <div className="product-img">
                <img src={data.image} alt="Product" />
              </div>
              <div className="product-info">
                <div className="title">{data.title.split(".")[0]}</div>
                <div className="description">{data.description}</div>
                <div className="price">
                  <span>Price: </span>
                  {data.price}$
                </div>
                <button className="product-btn">Button</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
