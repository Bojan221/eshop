import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productSlice";
import SingleProductComponent from "../components/SingleProductComponent";
import CategoryComponent from "../components/CategoryComponent.jsx";
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import LoadingComponent from "../components/LoadingComponent";

function HomePage() {

  const [isGrid, setIsGrid] = useState(true);

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
    <div className="flex flex-col lg:flex-row gap-[10px] justify-center">
    <CategoryComponent  className="w-[100%]"/>
    <div className="py-[50px] w-[100%] flex flex-col gap-[30px]">
      <div className="flex justify-end gap-[20px] w-[95%] mx-auto">
        <FaListUl size={30} className={`${isGrid ? "" : "bg-mainYellow"} p-[6px] rounded-lg`} onClick={() => setIsGrid(!isGrid)}  />
        <IoGrid size={30} className={`${isGrid ? "bg-mainYellow" : ""} p-[6px] rounded-lg`}  onClick={() => setIsGrid(!isGrid)} />
      </div>
      {isLoading ? (
        <div className={`${isGrid ? "mx-auto grid grid-cols-1 sm:grid-cols-2 gmd:grid-cols-3 lg:grid-cols-4 gap-[30px] w-[95%]":"flex flex-col gap-[10px] px-[20px]"}`}>
          {allProducts.map((product, index) => (
            <SingleProductComponent key={index} product={product}  isGrid={isGrid}/>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-[50px]"><LoadingComponent/></div>
      )}
    </div>
    </div>
  );
}

export default HomePage;
