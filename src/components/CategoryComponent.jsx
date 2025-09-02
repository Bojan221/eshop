import React from "react";
import CategoryService from "../services/CategoryService";
import ProductService from "../services/ProductService";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction, saveProductsByCategoryAction } from "../store/productSlice";
function CategoryComponent() {
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {AllProducts, selectCategory } = useSelector((state) => state.productStore);
  const dispatch = useDispatch()

  useEffect(() => {
    CategoryService.getCategoryList()
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=> {
    if(selectCategory) { 
      ProductService.getProductByCategory(selectCategory)
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
    } else { 
      ProductService.getAllProducts()
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
    }
  },[selectCategory])

  return (
    <div className="bg-gray-100">
      <div className="lg:w-[200px] mx-auto py-[10px] flex flex-col items-center gap-[50px] lg:flex-col lg:p-[5px]">
        <button 
          onClick={() => setIsLoading(!isLoading)}
          className="lg:w-[100%] bg-mainYellow text-white py-[12px] px-[40px]"
        >
          {isLoading ? "Hide Category" : "Category list"}
        </button>

        {isLoading && (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 gap-[10px]">
            <li className="bg-mainBlue text-white text-center py-[12px] px-[40px] cursor-pointer hover:bg-mainYellow transition-all duration-250 flex items-center justify-center" onClick={() => dispatch(saveProductsByCategoryAction(''))} >All Category</li>
            {allCategory.map((category, index) => (
              <li
                className={`${selectCategory === category ? 'bg-mainYellow'  : 'bg-mainBlue'} text-white text-center py-[12px] px-[40px] cursor-pointer hover:bg-mainYellow transition-all duration-250 flex items-center justify-center`}
                key={index}
                onClick={() => dispatch(saveProductsByCategoryAction(category))} 
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
