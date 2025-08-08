import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SingleProductComponent({ product }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[5px] border border-greyColor rounded-lg">
      <img
        src={product.thumbnail}
        alt="product image"
        className="h-[300px] w-auto"
      />

      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Rating
        name="half-rating-read"
        value={product.rating}
        precision={0.5}
        readOnly
      />
      <Link
        to={`/product/${product.id}`}
        className="bg-mainBlue text-white py-[12px] px-[40px] rounded-[25px] my-[20px]"
      >
        View more
      </Link>
    </div>
  );
}

export default SingleProductComponent;
