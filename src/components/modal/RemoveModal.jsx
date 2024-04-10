import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeCart } from "../../Actions/CartAction";
import { addWishlist } from "../../Actions/WishlistAction";
const RemoveModal = ({ item, setOpenModal }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenModal({ remove: "", qty: "", size: "" });
  };

  const handleDelete = () => {
    dispatch(removeCart(item._id));
    handleCloseModal();
  };

  const handleMove = () => {
    const body = {
      productId: item.productId._id,
      userId: item.userId,
    };
    dispatch(addWishlist(body));
    dispatch(removeCart(item._id));
    handleCloseModal();
  };

  return (
    <>
      <div
        className="h-screen w-full fixed left-0 right-0 top-0 z-[23] bg-[rgba(0,0,0,.5)] flex"
        onClick={() => {
          {
            handleCloseModal();
          }
        }}
      >
      <div className="modal-cont h-[185px] w-[417px] z-[30] relative  m-auto  bg-white flex  flex-col 
       "
       onClick={(e) => {
          // Prevent event propagation to parent div
          e.stopPropagation();
        }}>
        <div
          className="absolute right-3 top-[24px] cursor-pointer"
          onClick={handleCloseModal}
        >
          <CloseIcon className="text-[#434343] cursor-pointer " />
        </div>
        <div className="flex  mx-auto h-[100.35px] w-[367.4px] mt-[24.8px] border-b-[1px] border-[#EAEAEC]">
          <div className="img-cont h-[125.35px] w-[60px]">
            <img src={item.productId.image[0]} className="h-[80px] w-[60px]" />
          </div>

          <div className=" text-cont flex flex-col h-[80px] w-[291.4px]">
            <div className="info-cont ml-[10px]">
              <h1 className="font-bold text-[14px]">Move from bag</h1>

              <p className="text-[14px]">
                Are you sure you want to remove this item from bag?
              </p>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center h-[40px] w-[367.4px] mx-auto my-4">
          <p
            className=" font-semibold text-[#696b79] border-r-2 border-[#eaeaec]  cursor-pointer flex  justify-center w-[50%]"
            onClick={handleDelete}
          >
            REMOVE
          </p>
          <p
            className="text-[#5a49e3] flex  justify-center w-[50%] cursor-pointer font-semibold"
            onClick={handleMove}
          >
            MOVE TO WISHLIST
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default RemoveModal;
