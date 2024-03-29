// export default Wishlist;
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../Actions/CartAction";
import { fetchWishlist, removeWishlist } from "../../Actions/WishlistAction";

const Wishlist = ({ setProgress }) => {
  const { data: WishlistData, loading } = useSelector(
    (state) => state.wishlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === false) {
      setProgress(100);
    }
  }, [WishlistData]);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  const handletoCart = (item) => {
    const body = {
      userId: item.userId,
      productId: item.productId._id,
      count: 1,
      size: "",
    };
    dispatch(addCart(body));
    dispatch(removeWishlist(item._id));
  };

  return (
    <div className="container">
      <div className="flex flex-col mx-[60px] mt-[48px]">
        <div className="flex  gap-2 pb-8">
          <h1 className="text-[#282c3f] text-[18px] font-semibold">
            My Wishlist
          </h1>
          <p className="text-[#282c3f] text-[18px] ">
            {WishlistData?.length} items
          </p>
        </div>

        <div className="grid grid-cols-5 gap-10 ">
          {WishlistData?.map((item) => (
            <div
              className=" card flex flex-col  border-[#e9e9eb] border-[1px]  relative"
              key={item._id}
            >
              <div
                className="absolute  flex justify-center items-center h-[24px] w-[24px] rounded-full right-2 top-2 bg-[#d4d5d9]  cursor-pointer bg-opacity-[50%]"
                onClick={() => {
                  dispatch(removeWishlist(item._id));
                }}
              >
                <CloseIcon className="text-[#434343]" />
              </div>

              <div className="image-cont">
                <img
                  src={item.productId.image[0]}
                  alt=""
                  className="h-[294px ] w-[251.2px]"
                />
              </div>
              <div className="price-cont h-[94px] border-t-[1px] border[#e9e9eb] flex flex-col justify-center">
                <h1 className="mx-auto text-[16px] ">{item.name}</h1>
                <div className="flex flex-row gap-2 mx-auto">
                  <p className="text-[16px] font-semibold text-[#282c3f] ">
                    ₹{item.productId.retailPrice}
                  </p>
                  <p className="text-[12px] line-through pt-[4.5px] text-[#8e8e8e]">
                    ₹{item.productId.purchasePrice}
                  </p>

                  <p className="text-[12px] text-[#ff905a] pt-[2.5px] font-[700]">
                    (
                    {Math.floor(
                      ((item.productId.purchasePrice -
                        item.productId.retailPrice) /
                        item.productId.purchasePrice) *
                        100
                    )}
                    % OFF)
                  </p>
                </div>
              </div>
              <div className="mov-btn h-[46px]  text-[14px] text-[#5a49e3] flex  justify-center items-center border-t-[1px] border[#e9e9eb]">
                <p
                  className="m-auto font-[700] cursor-pointer"
                  onClick={() => handletoCart(item)}
                >
                  MOVE TO BAG
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
