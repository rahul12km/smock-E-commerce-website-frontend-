import React from "react";

const SportOption = ({ setOption }) => {
  const options = {
    menSports: [
      "Sports Shoes",
      "Sports Sandals",
      "Active T-Shirts",
      "Track Pants & Shorts",
      "Tracksuits",
      "Jackets & Sweatshirts",
      "Sports Accessories",
      "Swimwear",
    ],
    womenSports: [
      "Sports & Active Wear",
      "Clothing",
      "Footwear",
      "Sports Accessories",
      "Sports Equipment",
    ],
  };

  return (
    <div>
      <div
        className="main-container flex flex-row  shadow-lg ml-5   max-w-[fit-content] bg-[#f9f9f9] z-20"
        onMouseEnter={() => setOption("sports")}
        onMouseLeave={() => setOption("")}
      >
        <div className="sub-container1  mx-5 flex flex-col pb-5 mt-5">
          <div className="topwear  pb-3 ">
            <p className="font-bold mb-2 text-[#5a49e3] pr-[150px]">Boys</p>
            <ul>
              {options.menSports.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sub-container2  mr-5  pb-5 flex flex-col mt-5 ">
          <div className="bottomwear  pb-3">
            <p className="font-bold mb-2 text-[#5a49e3] pr-[150px]">Girls</p>
            <ul>
              {options.womenSports.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportOption;
