import React from "react";
import { CgBowl } from "react-icons/cg";
import { FcBinoculars } from "react-icons/fc";
import { BiRocket } from "react-icons/bi";
import { FcMoneyTransfer } from "react-icons/fc";
import { motion, useScroll } from "framer-motion";

import Cake from "../img/katie-rosario.jpg";
import ThreeCakes from "../img/three_cakes.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col  gap-6 text-left p-8">
       
        <div className="flex flex-col md:flex-row">
          <motion.section
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col mb-4 gap-6"
          >
            <h2 className="poiret text-perry-color text-3xl mb-4 font-bold text-center">
              About Perry Luscious
            </h2>
            <div>
              <div className="flex gap-4">
                <h3 className="text-perry-color text-xl mr-1 font-semibold">
                  Our Vision
                </h3>
                <FcBinoculars className="text-2xl text-perry-color" />
              </div>
              <p>
                To connect minds to quality and creative confectioneries with
                reliable credibility
              </p>
            </div>
            <div>
              <div className="flex gap-4 mt-2">
                <h3 className="text-perry-color text-xl  mr-1 font-semibold">
                  Our Mission
                </h3>
                <BiRocket className="text-2xl text-perry-color" />
              </div>
              <p className="mb-2">
                To satisfy consumers cravings while utilizing fresh ingredients
                and creating assurance.
              </p>
              <p>
                To represent an accurate reflection of a standard bakery and
                confectionery store.
              </p>
            </div>
          </motion.section>
          <img
            src={Cake}
            alt="cake"
            className="w-auto h-auto md:w-1/2 md:p-10"
          />
        </div>
        <hr className=" font-bold" />

        <div className="flex flex-col-reverse md:flex-row">
          <img
            src={ThreeCakes}
            alt="ThreeCakes"
            className="w-auto h-auto md:w-1/2 p-2 md:p-10"
          />
          <motion.section
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col mt-4 gap-6"
          >
            <h2 className="poiret text-perry-color text-3xl mb-2 font-bold text-center">
              Why Choose Us
            </h2>
            <ul className="flex flex-col  gap-4">
              <li className="flex mt-2 mb-2 gap-4">
                <CgBowl className="text-6xl mr-2" />
                <div>
                  <h3 className="text-perry-color text-xl  font-semibold">
                    Fresh ingredients
                  </h3>
                  <p>
                    Our products are baked with 100% fresh ingredients,
                    guaranteed quality and absolutely no commercial cakes mixes
                    are used
                  </p>
                </div>
              </li>
              <li className="flex mt-2 mb-2 gap-4">
                <span className=" md:text-3xl mr-2 ">&#128523;</span>
                <div>
                  <h3 className="text-perry-color text-xl  font-semibold">
                    Taste the difference
                  </h3>
                  <p>
                    We are passionate about baking. Each of our handmade items
                    are carefully baked with love. The cakes cut well and are
                    deliciously moist and flavorsome. We have a variety of
                    unique and traditional flavours to choose from. Once you
                    taste our cakes, you will notice the difference
                  </p>
                </div>
              </li>
              <li className="flex mt-2 mb-2 gap-4">
                <FcMoneyTransfer className=" text-8xl mr-2" />
                <div>
                  <h3 className="text-perry-color text-xl  font-semibold">
                    Budget friendly
                  </h3>
                  <p>
                    Have you dreamt of having
                    that 10 tier extravagant cake, but just can't afford it?
                    Talk to us! 
                    We understand budget constraints. Our prices are very affordable and we offer special discounts.
                  </p>
                </div>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default About;
