import React from "react";

const FemaleOption = ({ setOption }) => {
  const options = {
    LingerieSleepwear: [
      "Bra",
      "Briefs",
      "Shapewear",
      "Sleepwear & Loungewear",
      "Swimwear",
      "Camisoles & Thermals",
    ],
    FusionWear: [
      "Kurtas & Suits",

      "Kurtis, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings",
      "Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
    WesternWear: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Jumpsuits",
      "Shrugs",
      "Sweaters",
      "Sweatshirts",
      "Jackets & Coats",
      "Blazers & Waistcoats",
    ],
  };

  return (
    <>
      <div
        className="main-container flex flex-row  shadow-lg ml-5    max-w-[fit-content] bg-[#f9f9f9] z-20"
        onMouseEnter={() => setOption("women")}
        onMouseLeave={() => setOption("")}
      >
        <div className="sub-container1  mx-5 flex flex-col pb-5 mt-5">
          <div className="topwear border-b-2 border-[#eaeaec] pb-3 ">
            <p className="font-bold mb-2 text-[#5a49e3]">
              Indian & Fusion Wear
            </p>
            <ul>
              {options.FusionWear.map((option, index) => (
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
            <p className="font-bold mb-2 text-[#5a49e3] pr-10">
              Lingerie & Sleepwear
            </p>
            <ul>
              {options.LingerieSleepwear.map((option, index) => (
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
        <div className="sub-container2  w-[fit-content] px-7 mr-5 pb-10 flex flex-col mt-5 ">
          <div className="bottomwear border-b-2 border-[#eaeaec] pb-3">
            <p className="font-bold mb-2 text-[#5a49e3] pr-[60px]">
              Western Wear
            </p>
            <ul>
              {options.WesternWear.map((option, index) => (
                <li
                  key={index}
                  className="hover:font-bold hover:text-md cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="Sleepwear mt-5">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FemaleOption;
