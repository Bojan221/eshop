import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

function SingleProductPage() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return isLoading ? (
    <div>
      <div>
        <img src={singleProduct.thumbnail} alt="thumbnail" />
      </div>
      <div>
        <p>{singleProduct.title}</p>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default SingleProductPage;
