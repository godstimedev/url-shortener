import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-full  md:h-[250px] bg-[#232127] py-[3.5rem]">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 text-center md:text-start gap-8 md:grid-cols-3 text-white ">
        <div className="md:col-span-1 ">
          <h3 className="text-3xl cursor-pointer">Shortly</h3>
        </div>
        <div className="flex flex-col md:col-span-2 md:flex-row md:justify-between">
          <ul className="py-4">
            <h4 className="mb-4">Features</h4>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Link Shortening
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Branded Links
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Analytics
            </li>
          </ul>
          <ul className="py-4">
            <h4 className="mb-4">Resources</h4>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Blog
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Developers
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Support
            </li>
          </ul>
          <ul className="py-4">
            <h4 className="mb-4">Company</h4>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              About
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Our Team
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Carrers
            </li>
            <li className="text-xs font-light mb-2 cursor-pointer hover:text-[#2acfcf]">
              Contact
            </li>
          </ul>
          <ul className="py-4 flex justify-center ">
            <FaFacebookSquare
              size={25}
              className="mx-2 cursor-pointer hover:text-[#2acfcf]"
            />
            <FaTwitter
              size={25}
              className="mx-2 cursor-pointer hover:text-[#2acfcf]"
            />
            <FaPinterest
              size={25}
              className="mx-2 cursor-pointer hover:text-[#2acfcf]"
            />
            <FaInstagram
              size={25}
              className="mx-2 cursor-pointer hover:text-[#2acfcf]"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
