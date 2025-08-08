import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import { Rating } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function SingleProductPage() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);


  function increaseQuantity() {
    if(quantity < singleProduct.stock){
     setQuantity(quantity + 1)
    }
  }

  function decreaseQuantity () { 
    if(quantity > 0){
      setQuantity(quantity - 1)
    } 
  }

  return isLoading ? (
    <div className="flex w-[90%] mx-auto my-[50px] gap-[20px]">
      <div className="w-[50%] flex flex-col gap-[20px]">
        <img src={singleProduct.images[currentImage]} alt="thumbnail" className=" border border-greyColor rounded-[25px]" />
        <div className="flex items-center justify-center gap-[10px]">
          {singleProduct.images.map((image, index) => {
            return (
              <img
                src={image}
                alt="image"
                key={index}
                className={`h-[150px] w-[170px] border ${
                  currentImage === index
                    ? "border-mainBlue"
                    : "border-greyColor"
                }  rounded-[20px] cursor-pointer`}
                onClick={() => setCurrentImage(index)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1>{singleProduct.title}</h1>
        <h3>${singleProduct.price}</h3>
        <Rating
                name="half-rating-read"
                value={singleProduct.rating}
                precision={0.5}
                readOnly
              />
        <div className="flex gap-[10px]">
          <p>Avaibility:</p>
          {singleProduct.stock > 0 ? <span className="flex items-center gap-[10px] text-green-600"><FaCheck /> In Stock</span> : <span className="flex items-center gap-[10px] text-red-600"><IoMdClose /> Out of stock</span>}
        </div>
        <p>Hurry up! Only <span className="font-bold text-[#6c47ff]"> {singleProduct.stock} </span> product left in stock!</p>

        <div className="flex">
          <div className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[10px] cursor-pointer" onClick={decreaseQuantity}>-</div>
          <div className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[10px]">{quantity}</div>
          <div className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[10px] cursor-pointer" onClick={increaseQuantity}>+</div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default SingleProductPage;
