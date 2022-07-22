import React, { useRef } from "react";
import Slider from "react-slick";
import Img1 from "../img/flour&whisk.jpg";
import Img2 from "../img/heritage-chocolate.jpg";
import Img3 from "../img/white_cake.jpg";
import Img4 from "../img/cupcakes.jpg";
import Logo from "../img/logo_white.png";
// import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "easing",
  };

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className=" relative w-full ">
          {/* For picture carousel */}
          <Slider {...settings}>
            <img
              src={Img1}
              alt="img1"
              className=" w-full h-screen object-cover"
            />

            <img
              src={Img2}
              alt="img2"
              className=" w-full h-screen object-cover"
            />

            <img
              src={Img3}
              alt="img3"
              className=" w-full h-screen object-cover"
            />

            <img
              src={Img4}
              alt="img4"
              className=" w-full h-screen object-cover"
            />
          </Slider>
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
          <motion.span initial={{opacity:0,y:"100%"}} animate={{opacity:1,y:0}} transition ={{type:"spring",stiffness:100,delay:1,duration:1}}>
            <button
              className="poiret w-full p-1 text-sm text-white border cursor-pointer transition-all hover:transition-all hover:bg-white hover:bg-opacity-20 hover:font-extrabold font-semibold  md:w-1/2 "
              onClick={() => navigate("menu")}
            >
              Order Now
            </button>
          </motion.span>
        </div>
        {/* <BiMenuAltRight className="text-4xl absolute top-6  right-5 z-30 text-white cursor-pointer" /> */}
        <img
          src={Logo}
          alt="logo"
          className=" absolute top-5 left-5 w-12 h-12 z-30"
        />
        <div className="fullscreen-bg z-10"></div>
        <div
          className="text-white text-3xl font-semibold animate-bounce hover:font-extrabold  hover:rounded-full hover:border transition-all z-30 absolute bottom-16 right-5 cursor-pointer   "
          onClick={() =>  window.scrollBy(0, window.innerHeight)}
        >
          <AiOutlineArrowDown />
        </div>
      </div>
    </>
  );
};

export default Welcome;
