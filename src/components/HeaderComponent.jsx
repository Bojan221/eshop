import React from "react";
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import{useState} from 'react'
function HeaderComponent() {

  const[showHeader, setShowHeader] = useState(true);
  const[isClosing, setIsClosing] = useState(false);

   const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowHeader(false);
    }, 300); 
  };


   return (
    showHeader ? <div className={`relative transition-all duration-300 ease-in-out ${
        isClosing ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
      }`}>
      <div className=" flex flex-col justify-between items-center gap-[20px] w-[90%] mx-auto py-[15px] md:flex-row md:py-[30px]">
        <div>
          <p className="text-[14px] text-textColor">
            Need help? Call us:(+96) 0234 456 789
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CiLocationOn size={18} />
            <p className="text-[14px] text-textColor">Our store</p>
          </div>
          <div className="flex items-center gap-2">
            <CiDeliveryTruck size={18} />
            <p className="text-[14px] text-textColor ">Track your order</p>
          </div>
        </div>
      </div>
      <IoClose
        size={18}
        className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
        onClick={handleClose}
      />
    </div>: null
    )
}

export default HeaderComponent;
