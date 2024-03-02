import React from "react";

const SalesOption = ({ setOption }) => {
  const options = ["Trending", "Top Rated", "Most Popular", "New Arrivals"];

  return (
    <div>
      <div
        className="main-container flex flex-row  shadow-lg ml-5   w-[160px] bg-[#f9f9f9] z-20"
        onMouseEnter={() => setOption("sales")}
        onMouseLeave={() => setOption("")}
      >
        <div className="sub-container1  mx-5 flex flex-col pb-5 mt-5">
          <div className="sales  pb-3 ">
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer p-2"
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

export default SalesOption;
