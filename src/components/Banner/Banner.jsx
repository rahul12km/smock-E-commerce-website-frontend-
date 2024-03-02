/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div className="grid  lg:grid-cols-3  max-sm:grid-cols-1 lg:gap-x-20  max-sm:gap-y-10    w-full m-auto py-10 lg:px-[72px] max-sm:px-[40px] ">
      <div className="flex   relative rounded-2xl h-[363px] group  overflow-hidden sm:gap-10 ">
        <img
          src="https://www.apetogentleman.com/wp-content/uploads/2018/10/best-british-fashion-brands-1.jpg"
          alt=""
          className="object-cover  rounded-[14px]"
        />
        <div
          className="absolute inset-0 rounded-[14px]"
          style={{
            background: "linear-gradient(to bottom, transparent , #1f1f1f)",
          }}
        />

        <div className=" flex text-white text-2xl  font-bold absolute w-full  justify-center transition-top duration-500 ease-in-out transform  top-[85%]  group-hover:top-[70%] ">
          Men's Fashion
        </div>
        <div className=" flex justify-center text-xl absolute w-full transition-top duration-[700ms] ease-in-out transform top-[100%] font-semibold text-[#cebd9c] group-hover:top-[85%] cursor-pointer ">
          <p className="transition-all hover:tracking-wider">Shop Now</p>
        </div>
      </div>

      <div className="flex relative    rounded-2xl h-[363px]  group overflow-hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/1732/7115/products/NH-SummerFall22-NatalieBusby-213_900x.jpg?v=1650299554"
          alt=""
          className="object-cover w-full rounded-[14px]"
        />
        <div
          className="absolute inset-0  rounded-[14px]"
          style={{
            background: "linear-gradient(to bottom, transparent 20%, #1f1f1f )",
          }}
        ></div>
        <div className=" flex text-white text-2xl font-bold absolute w-full justify-center transition-top duration-500 ease-in-out transform  top-[85%]  group-hover:top-[70%]  ">
          Women's Fashion
        </div>

        <div className=" flex justify-center text-xl absolute w-full transition-top duration-[700ms] ease-in-out transform top-[100%] font-semibold text-[#cebd9c] group-hover:top-[85%] cursor-pointer  ">
          <p className="transition-all hover:tracking-wider">Shop Now</p>
        </div>
      </div>

      <div className="flex  relative  rounded-2xl h-[363px]  group  overflow-hidden">
        <img
          src="https://en.basiccph.com/wp-content/uploads/sites/8/Skaermbillede-2021-10-07-kl.-11.11.18.png"
          alt=""
          className="object-cover h-full w-full rounded-[14px]"
        />
        <div
          className="absolute inset-0  rounded-[14px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #1f1f1f)",
          }}
        ></div>
        <div className=" flex text-white text-2xl  font-bold absolute w-full justify-center transition-top duration-500 ease-in-out transform  top-[85%]  group-hover:top-[70%]  ">
          Kid's Fashion
        </div>
        <div className=" flex justify-center text-xl absolute w-full transition-top duration-[700ms] ease-in-out transform top-[100%] font-semibold text-[#cebd9c] group-hover:top-[85%] cursor-pointer ">
          <p className="transition-all hover:tracking-wider">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
