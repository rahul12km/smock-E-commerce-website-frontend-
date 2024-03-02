import React from "react";

const KidOption = ({ setOption }) => {
  const options = {
    Boys: [
      "T-Shirts",
      "Shirts",
      "Shorts",
      "Jeans",
      "Trousers",
      "Clothing Sets",
      "Ethnic Wear",
      "Track Pants & Pyjamas",
      "Jacket, Sweater & Sweatshirts",
      "Party Wear",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],

    Girls: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Clothing Sets",
      "Lehenga choli",
      "Kurta Sets",
      "Party wear",
      "Dungarees & Jumpsuits",
      "Skirts & shorts",
      "Tights & Leggings",
      "Jeans, Trousers & Capris",
      "Jacket, Sweater & Sweatshirts",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
  };

  return (
    <>
      <div
        className="main-container flex flex-row  shadow-lg ml-5   max-w-[fit-content] bg-[#f9f9f9] z-20"
        onMouseEnter={() => setOption("kids")}
        onMouseLeave={() => setOption("")}
      >
        <div className="sub-container1  mx-5 flex flex-col pb-5 mt-5">
          <div className="topwear  pb-3 ">
            <p className="font-bold mb-2 text-[#5a49e3] pr-[200px]">Boys</p>
            <ul>
              {options.Boys.map((option, index) => (
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
          <div className="bottomwear  pb-3">
            <p className="font-bold mb-2 text-[#5a49e3] pr-[203px]">Girls</p>
            <ul>
              {options.Girls.map((option, index) => (
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

export default KidOption;
