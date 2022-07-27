import React, { useState } from "react";
import { FaCartPlus, FaPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { BiX } from "react-icons/bi";

const Card = ({ id, name, price, img, onAddtoCart, description }) => {
  const [productCard, setProductCard] = useState(false);
  const [addedTOCart, setAddedToCart] = useState(false);
 
  return (
    <>
       {productCard && (
        <div className="sticky flex flex-col lg:flex-row top-0 left-0 h-screen w-full bg-slate-300 z-50 ">
          <img
            src={img}
            alt={name}
            className="object-cover relative w-full lg:w-5/6 h-4/5 lg:h-full  bg-white"
          />
          <motion.span
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 1.2 }}
            className="absolute top-5 right-5"
          >
            <BiX
              className="  text-4xl cursor-pointer"
              onClick={() => setProductCard(false)}
            />
          </motion.span>
          <div className="text-center p-3 flex flex-col align-middle justify-center lg:mr-auto lg:ml-auto">
            <p className=" text-3xl">{name} </p>
            <p>
              <i>
                {description == false || description == undefined ? (
                  `Yummy`
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                )}
              </i>
            </p>
            {!addedTOCart ? (
              <motion.div
                whileTap={{ scale: 0.75 }}
                whileHover={{ scale: 1.2 }}
                className="bg-perry-color text-white rounded-lg p-1 cursor-pointer flex justify-center md:w-1/2 lg:w-full ml-auto mr-auto"
                onClick={() => {
                  setAddedToCart(true);
                  onAddtoCart(id, 1);
                }}
              >
                <span className="text-xl mr-1"> Add to Cart </span>

                <FaPlus className="text-2xl" />
              </motion.div>
            ) : (
              <div className="bg-green-700 text-white rounded-lg p-1  flex justify-center md:w-1/2 lg:w-full ml-auto mr-auto">
                <span className="text-xl mr-1"> Item Added to Cart </span>

                <MdDone className="text-2xl" />
              </div>
            )}
          </div>
        </div>
      )}
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-40  md:w-1/4 lg:w-1/6  border border-solid shadow-xl m-1  hover:shadow-2xl hover:shadow-slate-400  rounded-b-2xl rounded "
    >
      <motion.div whileTap={{ scale: 1.5 }}>
        <img
          src={img}
          alt={name}
          className="object-cover w-full  h-32 md:h-48 cursor-pointer"
          onClick={() => setProductCard(true)}
        />
      </motion.div>
      <div className="flex flex-col space-y-2 w-full h-fit text-left p-3">
        <div>{name}</div>
        <hr />
        <div className="flex justify-between text-sm">
          <span>
            <bold>{price}</bold> <small className="line-through"></small>
          </span>
          {!addedTOCart ? (
            <motion.span whileTap={{ scale: 0.75 }} whileHover={{ scale: 1.2 }}>
              <FaCartPlus
                className="text-perry-color text-xl cursor-pointer"
                onClick={() => {
                  setAddedToCart(true);
                  onAddtoCart(id, 1);
                }}
              />
            </motion.span>
          ) : (
            <span>
              <BsCartCheckFill className="text-green-700 text-xl " />
            </span>
          )}
        </div>
      </div>
      
    </motion.div>
 
    </>
  );
};

export default Card;
