import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillPhone,
} from "react-icons/ai";

const Footer = () => {
  const d = new Date();
  return (
    <>
      <footer className=" flex flex-col r justify-center text-center bg-slate-600 gap-4 text-white p-3">
        <div className="flex justify-center ml-auto mr-auto gap-4 text-3xl">
          <a href="tel:+2349065736730" className="m-1">
            <AiFillPhone />
          </a>
          <a href="https://wa.me/+2349030655243" className="m-1">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://instagram.com" className="m-1">
            <AiFillInstagram />
          </a>
          <a href="https://facebook.com" className="m-1">
            <AiFillFacebook />
          </a>
          <a href="https://twitter.com" className="m-1">
            <AiOutlineTwitter />
          </a>
        </div>
        <p>
          <span className="sacramento">Perry Luscious</span> &copy;{" "}
          {d.getFullYear()}{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
