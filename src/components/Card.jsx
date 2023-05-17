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
    <div
      className="flex flex-col w-40  md:w-1/4 lg:w-1/6  border border-solid shadow-xl m-1  hover:shadow-2xl hover:shadow-slate-400  rounded-b-2xl rounded "
    >
      <div >
        <img
          src={img}
          alt={name}
          className="object-cover w-full  h-32 md:h-48 cursor-pointer"
          onClick={() => setProductCard(true)}
        />
      </div>
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
      
    </div>
 
    </>
  );
};

export default Card;
