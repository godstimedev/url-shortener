import React from "react";
import bgImg from "../assets/bg-boost-desktop.svg";

function Booster() {
  return (
    <div
      className="w-full h-[14rem] bg-[#3b3054] grid justify-center place-content-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-white text-center">
        <h2 className="text-3xl py-4 ">Boost your links today</h2>
        <button className="py-2 px-5 rounded-3xl bg-[#2acfcf] hover:bg-opacity-50 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Booster;
