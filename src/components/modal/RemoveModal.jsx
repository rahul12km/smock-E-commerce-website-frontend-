import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const RemoveModal = ({ setRemoveModal }) => {
  return (
    <>
      <div
        className="h-[100vh] w-full fixed left-0 right-0 top-0 z-[23] bg-[rgba(0,0,0,.5)] flex"
        onClick={() => {
          setRemoveModal(false);
        }}
      ></div>
      <div className="modal-cont h-[185px] w-[417px] z-[30] absolute  top-[25%] left-[35%]  bg-white flex  flex-col  ">
        <div
          className="absolute right-3 top-[24px] cursor-pointer"
          onClick={() => setRemoveModal(false)}
        >
          <CloseIcon className="text-[#434343] " />
        </div>
        <div className="flex  mx-auto h-[100.35px] w-[367.4px] mt-[24.8px] border-b-[1px] border-[#EAEAEC]">
          <div className="img-cont h-[125.35px] w-[60px]">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21358008/2022/12/30/857660aa-aa0c-407a-a094-95e2e90087fa1672400774136SpykarMenPistaGreenCottonSlimFitPlainShirt1.jpg"
              className="h-[80px] w-[60px]"
            />
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
          <p className=" font-semibold text-[#696b79] border-r-2 border-[#eaeaec]  cursor-pointer flex  justify-center w-[50%]">
            REMOVE
          </p>
          <p className="text-[#5a49e3] flex  justify-center w-[50%] cursor-pointer font-semibold">
            MOVE TO WISHLIST
          </p>
        </div>
      </div>
    </>
  );
};

export default RemoveModal;
