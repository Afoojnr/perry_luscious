import React from "react";
import { CgBowl } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";
import { FcBinoculars } from "react-icons/fc";
import { BiRocket } from "react-icons/bi";
import { motion, useScroll } from "framer-motion";

// import CupcakeImage from '../img/choc.png';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 text-left p-8">
        {/* <img src={CupcakeImage} alt="cupcake" className="w-1/2 h-auto" /> */}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dignissimos nostrum dolor expedita voluptatum, enim sunt ullam
              minima vitae earum!
            </p>
          </div>
          <div>
            <div className="flex gap-4 mt-2">
              <h3 className="text-perry-color text-xl  mr-1 font-semibold">
                Our Mission
              </h3>
              <BiRocket className="text-2xl text-perry-color" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minima, sint tempore nisi veritatis asperiores placeat dolore.
              Quia, iusto nobis!
            </p>
          </div>
        </motion.section>

        <hr className=" font-bold" />

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
              <CgBowl className="text-5xl mr-2" />
              <div>
                <h3 className="text-perry-color text-xl  font-semibold">
                  Fresh ingredients
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  asperiores?
                </p>
              </div>
            </li>
            <li className="flex mt-2 mb-2 gap-4">
              <span className=" md:text-3xl mr-2 ">&#128523;</span>
              <div>
                <h3 className="text-perry-color text-xl  font-semibold">
                  Baked with love
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  asperiores?
                </p>
              </div>
            </li>
            <li className="flex mt-2 mb-2 gap-4">
              <BsCartCheck className="text-5xl mr-2" />
              <div>
                <h3 className="text-perry-color text-xl  font-semibold">
                  On time delivery
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  asperiores?
                </p>
              </div>
            </li>
          </ul>
        </motion.section>
      </div>
    </>
  );
};

export default About;
