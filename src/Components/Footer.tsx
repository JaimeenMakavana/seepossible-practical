import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const SocialMedia = ({ children }: { children: any }) => {
  return (
    <div className=" border p-1 rounded-full group hover:scale-110 transition-all duration-300">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-between items-center mx-5 glass p-2 ">
      <p className="text-sm">Cookie policy - Legal Notice</p>
      <p className="text-xs">
        Copyright &copy;2021. Made with &#10084; from seepossible
      </p>
      <div className=" flex justify-end gap-5 items-center   ">
        <SocialMedia>
          <GrFacebookOption className=" cursor-pointer " />
        </SocialMedia>
        <SocialMedia>
          <BiLogoInstagram className=" cursor-pointer " />
        </SocialMedia>
        <SocialMedia>
          <BsTwitter className=" cursor-pointer " />
        </SocialMedia>
        <SocialMedia>
          <FaPinterestP className=" cursor-pointer " />
        </SocialMedia>
      </div>
    </div>
  );
};

export default Footer;
