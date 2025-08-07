import React from "react";
import CategoryService from "../services/categoryService";
import { useState, useEffect } from "react";
import { all } from "axios";
function CategoryComponent() {
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    CategoryService.getCategoryList()
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="w-[90%] mx-auto py-[10px] flex items-center gap-[50px]">
        <button
          onClick={() => setIsLoading(!isLoading)}
          className="bg-mainYellow text-white py-[12px] px-[40px]"
        >
          {isLoading ? "Hide Category" : "Show Category"}
        </button>

        
          {isLoading && (
            <ul className="grid grid-cols-6 gap-[10px]">
              {allCategory.map((category, index) => (
                <li
                  className="bg-mainBlue text-white py-[12px] px-[40px] cursor-pointer hover:bg-mainYellow transition-all duration-250 flex items-center justify-center"
                  key={index}
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
