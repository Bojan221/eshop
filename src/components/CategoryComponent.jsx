import React from "react";
import CategoryService from "../services/CategoryService";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveProductsByCategoryAction } from "../store/productSlice";
function CategoryComponent() {
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    CategoryService.getCategoryList()
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategory = (category) => {
    CategoryService.getProductByCategory(category)
    .then(res => dispatch(saveProductsByCategoryAction(res.data.products)))
    .catch(err => console.log(err))
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[90%] mx-auto py-[10px] flex flex-col items-center gap-[50px] lg:flex-row">
        <button
          onClick={() => setIsLoading(!isLoading)}
          className="bg-mainYellow text-white py-[12px] px-[40px]"
        >
          {isLoading ? "Hide Category" : "Category list"}
        </button>

        {isLoading && (
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-[10px]">
            {allCategory.map((category, index) => (
              <li
                className="bg-mainBlue text-white text-center py-[12px] px-[40px] cursor-pointer hover:bg-mainYellow transition-all duration-250 flex items-center justify-center"
                key={index}
                onClick={() => handleCategory(category)}
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
