import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SingleProductComponent({ product, isGrid }) {
  return (
    <div
      className={`${
        isGrid
          ? "flex flex-col items-center justify-center gap-[5px] border border-greyColor rounded-lg"
          : "flex justify-between items-center border border-greyColor rounded-lg px-[20px]"
      }`}
    >
      <img
        src={product.thumbnail}
        alt="product image"
        className="h-[150px] md:h-[300px] w-auto"
      />

      <h3>{product.title}</h3>
      <p className="hidden md:block">{product.price}</p>
      <div className="hidden md:block">
        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.5}
          readOnly
        />
      </div>
      <Link
        to={`/product/${product.id}`}
        className={`${isGrid ? "bg-mainBlue text-white py-[12px] px-[40px] rounded-[25px] my-[20px] hover:bg-mainYellow transition-all duration-200":"bg-mainBlue text-white py-[8px] px-[12px] rounded-[25px] hover:bg-mainYellow transition-all duration-200 text-[14px] md:text-[16px] text-center"} `}
      >
        View more
      </Link>
    </div>
  );
}

export default SingleProductComponent;
