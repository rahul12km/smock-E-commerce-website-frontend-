import React from "react";

const MenOption = ({ setOption }) => {
  const options = {
    topwear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Sweaters",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    indianFestive: [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    sleepwear: ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear ", "Thermals"],
  };

  return (
    <>
      <div
        className="main-container flex flex-row  shadow-lg ml-5   max-w-[fit-content] bg-[#f9f9f9] z-20"
        onMouseEnter={() => setOption("men")}
        onMouseLeave={() => setOption("")}
      >
        <div className="sub-container1  mx-5 flex flex-col pb-5 mt-5">
          <div className="topwear border-b-2 border-[#eaeaec] pb-3 ">
            <p className="font-bold mb-2 text-[#5a49e3]">Topwears</p>
            <ul>
              {options.topwear.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="Indian-festive mt-5">
            <p className="font-bold mb-2 text-[#5a49e3]">
              Indian & Festive Wear
            </p>
            <ul>
              {options.indianFestive.map((option, index) => (
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
        <div className="sub-container2  px-7 mr-5  pb-10 flex flex-col mt-5 ">
          <div className="bottomwear border-b-2 border-[#eaeaec] pb-3">
            <p className="font-bold mb-2 text-[#5a49e3]">Bottomwear</p>
            <ul>
              {options.bottomwear.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="Sleepwear mt-5">
            <p className="font-bold mb-2 text-[#5a49e3]">
              Sleepwear & Innerwear
            </p>
            <ul>
              {options.sleepwear.map((option, index) => (
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
    </>
  );
};

export default MenOption;
