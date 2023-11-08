import "./product.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../useFetch/useFetch";

function Product(props) {
  const id = useParams();
  const [productItme, setProductItem] = useState(null);
  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products/" + id.id
  );
  console.log(data);
  return <h1>Product</h1>;
}

export default Product;
