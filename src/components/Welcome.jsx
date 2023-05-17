import React, { useRef } from "react";
import Img1 from "../img/flour&whisk.jpg";
import Img2 from "../img/heritage-chocolate.jpg";
import Img3 from "../img/white_cake.jpg";
import Img4 from "../img/cupcakes.jpg";
import Logo from "../img/logo_white.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className=" relative w-full ">
          <img
            src={Img3}
            alt="img3"
            className=" w-full h-screen object-cover"
          />
        </div>

        {/* For mid banner */}
        <div className=" absolute flex flex-col gap-4 top-1/3 right-1/4 w-1/2  text-center  z-30 ">
          <motion.span
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sacramento text-5xl text-white"
          >
            Perry Luscious
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="poiret text-2xl text-white"
          >
            Your Taste Buds Deserve Quality
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 1,
              duration: 2,
            }}
          >
            <button
              className="poiret w-full p-1 text-sm text-white border cursor-pointer transition-all hover:transition-all hover:bg-white hover:bg-opacity-20 hover:font-extrabold font-semibold  md:w-1/2 "
              onClick={() => navigate("menu")}
            >
              Order Now
            </button>
          </motion.span>
        </div>
        <img
          src={Logo}
          alt="logo"
          className=" absolute top-5 left-5 w-12 h-12 z-30"
        />
        <div className="fullscreen-bg z-10"></div>
      </div>
    </>
  );
};

export default Welcome;
