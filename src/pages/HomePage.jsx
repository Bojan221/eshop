import React, { useEffect } from "react";
import ProductService from "../services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productSlice";
import SingleProductComponent from "../components/SingleProductComponent";

function HomePage() {
  const dispatch = useDispatch();

  const { allProducts, isLoading } = useSelector((state) => state.productStore);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        dispatch(saveAllProductsAction(res.data.products));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-[50px]">
      {isLoading ? (
        <div className="w-[90%] mx-auto flex flex-wrap gap-[30px] items-center justify-center">
          {allProducts.map((product, index) => (
            <SingleProductComponent key={index} product={product} />
          ))}
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default HomePage;
