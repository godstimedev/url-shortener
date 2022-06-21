import React from "react";
import Brand from "../assets/icon-brand-recognition.svg";
import Detailed from "../assets/icon-detailed-records.svg";
import Fully from "../assets/icon-fully-customizable.svg";

function Stats() {
  return (
    <div className="w-full h-full bg-[#ebeaea] py-[6rem] mt-[4rem] md:mt-0">
      <div className="max-w-[1240px] mx-auto pt-[1rem]">
        <div className="text-center py-[6rem] md:py-[4rem] md:max-w-[47%] max-w-[75%]  mx-auto">
          <h2 className="text-4xl py-4 text-[#232127]">Advanced Statistics</h2>
          <p className="pb-4 text-[#9e9aa7] max-w-[80%] mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-16 px-4 pb-4 relative">
          <div className="py-12 px-8 bg-white rounded-lg">
            <div className="flex flex-col px-6 md:text-left md:items-start text-center items-center">
              <div className="w-[80px] h-[80px]  bg-[#3b3054] rounded-full p-5 absolute top-[-2.5rem]">
                <img src={Brand} alt="/" />
              </div>
              <h3 className="text-2xl py-4 text-[#232127]">
                Brand Recognition
              </h3>
              <p className=" text-[#9e9aa7] ">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div className="before:absolute sm:before:left-[50%] sm:before:top-[26.3%] sm:before:w-[7px] sm:before:h-[27px]  md:before:right-[65.69%] md:before:top-[50%] before:bg-[#2acfcf] md:before:h-[7px] md:before:w-[16px] py-16 px-10 bg-white rounded-lg">
            <div className="flex flex-col px-6 md:text-left md:items-start text-center items-center">
              <div className="w-[80px] h-[80px] rounded-full bg-[#3b3054] p-5 absolute md:top-[-2.5rem] top-[29%]">
                <img src={Detailed} alt="/" />
              </div>
              <h3 className="text-2xl py-4 text-[#232127]">Detailed Records</h3>
              <p className=" text-[#9e9aa7] ">
                Detailed Records Gain insights into who is clicking your links.
                Knowing when and where people engage with your content helps
                inform better decisions.
              </p>
            </div>
          </div>
          <div className="before:absolute sm:before:left-[50%] sm:before:top-[62.3%] sm:before:w-[7px] sm:before:h-[27px] md:before:right-[32.9%] md:before:top-[50%] before:bg-[#2acfcf] md:before:h-[7px] md:before:w-[16px] py-16 px-10 bg-white rounded-lg">
            <div className="flex flex-col px-6 md:text-left md:items-start text-center items-center">
              <div className="w-[80px] h-[80px] rounded-full bg-[#3b3054] p-5 absolute md:top-[-2.5rem] top-[65%] ">
                <img src={Fully} alt="/" />
              </div>
              <h3 className="text-2xl py-4 text-[#232127]">
                Fully Customizable
              </h3>
              <p className=" text-[#9e9aa7] ">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
