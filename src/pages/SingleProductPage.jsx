import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import { Rating } from "@mui/material";
import { FaCheck, FaTruck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addProductToCartAction } from "../store/cartSlice";
function SingleProductPage() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function increaseQuantity() {
    if (quantity < singleProduct.stock) {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    dispatch(addProductToCartAction(singleProduct));
    setIsAdded(true);
    
  }

  return isLoading ? (
    <div className="flex flex-col w-[90%] mx-auto my-[50px] gap-[20px] md:flex-row">
      <div className="md:w-[50%] flex flex-col gap-[20px]">
        <img
          src={singleProduct.images[currentImage]}
          alt="thumbnail"
          className=" border border-greyColor rounded-[25px]"
        />
        <div className="flex items-center justify-center gap-[10px]">
          {singleProduct.images.map((image, index) => {
            return (
              <img
                src={image}
                alt="image"
                key={index}
                className={`h-[90px] xl:h-[140px] w-[100px] xl:w-[160px] border ${
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
      <div className="flex flex-col justify-start gap-[20px]">
        <h1 className="text-[24px] lg:text-[36px] text-mainBlue font-semibold">{singleProduct.title}</h1>
        <h3 className="text-[16px] lg:text-[24px] text-gray-800 font-semibold">${singleProduct.price}</h3>
        <Rating
          name="half-rating-read"
          value={singleProduct.rating}
          precision={0.5}
          readOnly
        />
        <div className="flex gap-[10px]">
          <p className="text-slate-600">Avaibility:</p>
          {singleProduct.stock > 0 ? (
            <span className="flex items-center gap-[10px] text-green-600">
              <FaCheck /> In Stock
            </span>
          ) : (
            <span className="flex items-center gap-[10px] text-red-600">
              <IoMdClose /> Out of stock
            </span>
          )}
        </div>
        <p className="text-slate-600">
          Hurry up! Only 
          <span className="font-bold text-[#6c47ff]">
            {" "}{singleProduct.stock}{" "}
          </span>
           product left in stock!
        </p>

        <ul className="flex gap-[10px] items-center text-slate-600"> Tags:
          {singleProduct.tags.map((tag, index) => {
            return <li key={index} className="text-[#525154] bg-slate-300 py-1 px-2">#{tag}</li>
          })}
        </ul>

        <div className="flex items-center">
          <p className="mr-[10px] text-slate-600">Quantity: </p>
          <div
            className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[10px] cursor-pointer"
            onClick={decreaseQuantity}
          >
            -
          </div>
          <div className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[15px]">
            {quantity}
          </div>
          <div
            className="flex items-center justify-center text-center border border-gray-600 bg-gray-200 text-[24px] px-[10px] cursor-pointer"
            onClick={increaseQuantity}
          >
            +
          </div>
        </div>

        <div className="flex gap-[20px] items-center">
          {isAdded ? <button className="flex items-center justify-center px-[50px] py-[15px] bg-mainYellow font-bold rounded-[25px] transition-all duration-200 gap-[5px] text-green-600" disabled> <FaCheck color="#16A34A"/> Added</button> : <button className="px-[50px] py-[15px] bg-mainYellow text-white font-bold rounded-[25px] cursor-pointer hover:bg-mainBlue transition-all duration-200" onClick={addToCart}>Add to cart</button>}
          <CiHeart size={50} className="cursor-pointer p-[10px] rounded-full bg-slate-300 hover:fill-red-600"/>
        </div>

        <hr />

        <p className="flex items-center gap-[15px]"><FaTruck size={15}/> <span>{singleProduct.shippingInformation}</span></p>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default SingleProductPage;
