import React, { useState, useEffect } from "react";
import bgImg from "../assets/bg-shorten-desktop.svg";

// https:/api.shrtco.de/v2/shorten?url=
const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
    } else {
      // check if its a valid link
      const shortenLink = async () => {
        const res = await fetch(`https:/api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();

        // console.log(data.result);
        setLinks(data.result);
        setText("");
      };

      shortenLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <div className="w-full absolute lg:top-[97vh] md:top-[97vh] sm:top-[97vh] top-[97vh] px-4">
      <div
        className=" px-4 max-w-[1040px] mx-auto md:h-[6rem] h-[10rem]  bg-[#3b3054] rounded-md"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex-col md:flex-row  md:w-[90%] h-[100%] pt-7 md:mx-auto md:my-auto"
        >
          <input
            type="url"
            placeholder="Shorten a link here..."
            className="md:w-[75%] w-full py-2 px-4 rounded-md border-none outline-none"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            onClick={handleSubmit}
            className="py-2 px-5 rounded-md md:ml-[2rem] mt-4 md:mt-0 bg-[#2acfcf] hover:bg-opacity-50 text-white w-full md:w-auto"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <article className="px-4 max-w-[1040px] mx-auto bg-white my-2">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between py-2">
          <div>{links.original_link}</div>
          <div className="md:flex md:justify-center md:items-center">
            <div className="text-[#2acfcf]">{links.full_short_link}</div>
            <button
              onClick={handleCopy}
              className="py-2 px-5 rounded-md md:ml-[2rem] md:mt-0 bg-[#2acfcf] hover:bg-opacity-50 text-white w-full md:w-auto focus:bg-[#3b3054]"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Shortener;
