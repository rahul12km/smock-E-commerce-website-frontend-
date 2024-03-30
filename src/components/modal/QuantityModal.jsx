import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { updateCart } from "../../Actions/CartAction";
import { useDispatch } from "react-redux";
const QuantityModal = ( {item ,setOpenModal}) => {
  const [qty, setQty] = useState(1);
  let numitem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useDispatch();


  const handleCloseModal=()=>{
 
    setOpenModal({remove:"",qty:"",size:"",})
  }
  

  //-----------------------------------LOCAL UPDATE AND  BACKEND UPDATE---------------------------------------//
  
  const handleQtyUpdate = () => {
    console.log(item._id, qty, item.size);
    dispatch(updateCart({ id: item._id, qty, size: item.size })); 
    handleCloseModal();

  };

  //---------------------------------------------------HTML BODY----------------------------------------------------//

  return (
    <>
      <div
        className="h-[100vh] w-full fixed left-0 right-0 top-0 z-[23] bg-[rgba(0,0,0,.5)] flex"
        onClick={handleCloseModal}
      ></div>
      <div className="h-[238px] w-[310px] bg-white flex flex-col absolute  top-[35%] left-[40%]  z-[30] px-[15px] py-[15px]">
        <div className="absolute top-0 right-0 mr-2 mt-2">
          <CloseIcon
            className="cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        <h1 className="text-[16px] text-[#282c3f] mb-3 font-bold border-b-[1px] pb-5 border-[#dbdbdb]">
          {" "}
          Select Quantity{" "}
        </h1>
        <div className="flex gap-2  w-full flex-wrap">
          {numitem.map((x, i) => (
            <div
              key={i}
              onClick={() => setQty(x)}
              className={`${
                qty === x
                  ? "h-[40px] w-[39.6px] rounded-full flex justify-center items-center border-2  text-[#5a49e3] border-[#5a49e3]"
                  : "h-[40px] w-[39.6px] rounded-full flex justify-center items-center border-2 border-[#282c3f] hover:text-[#5a49e3] hover:border-[#5a49e3]"
              }`}
            >
              <span className="cursor-pointer">{x}</span>
            </div>
          ))}
        </div>
        <button
          className="h-[40px]  w-[280px] text-white bg-[#5a49e3] text-bold text-[14px] hover:bg-[#6c5ddc] mt-5"
          onClick={handleQtyUpdate}
        >
          DONE
        </button>
      </div>
    </>
  );
};

export default QuantityModal;
