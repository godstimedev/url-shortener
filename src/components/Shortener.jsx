import React from "react";
import bgImg from "../assets/bg-shorten-desktop.svg";

function Shortener() {
  return (
    <div className="w-full absolute lg:top-[99%] md:top-[125%] sm:top-[120%] top-[110%] px-4">
      <div
        className=" px-4 max-w-[1040px] mx-auto md:h-[6rem] h-[10rem]  bg-[#3b3054] rounded-md"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <form className="flex-col md:flex-row  md:w-[90%] h-[100%] pt-7 md:mx-auto md:my-auto">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="md:w-[75%] w-full py-2 px-4 rounded-md border-none outline-none"
          />
          <button className="py-2 px-5 rounded-md md:ml-[2rem] mt-4 md:mt-0 bg-[#2acfcf] hover:bg-[#87e9e9] text-white w-full md:w-auto">
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shortener;
