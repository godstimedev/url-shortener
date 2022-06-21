import React from "react";
import HeroImg from "../assets/illustration-working.svg";

function Hero() {
  return (
    <div className="w-full h-[90vh] border-b pb-[8rem]">
      <div className="max-w-[1240px] px-4 mx-auto grid lg:grid-cols-2 ">
        <img src={HeroImg} alt="/" className="lg:absolute lg:right-0" />
        <div className=" flex-col lg:justify-center lg:text-start justify-center text-center items-center lg:max-w-[60%] lg:my-[6rem]">
          <h1 className="text-5xl py-4 text-[#232127]">
            More than just shorter links
          </h1>
          <p className="pb-4 text-[#9e9aa7]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="py-2 px-5 rounded-3xl bg-[#2acfcf] hover:bg-opacity-50 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
