import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { BiMinus, BiPlus, BiX } from "react-icons/bi";
import { commerce, Commerce } from "../lib/commerce";

const CartCard = ({ name, price, img, quantity,id,updateQty,
removeCartItem }) => {
  
  return (
    <>
      <div className="w-full  md:w-1/3 p-1 px-2 rounded-lg bg-slate-600 flex item-center gap-2 mt-2 mb-2">
        <img
          src={img}
          alt=""
          className="w-20 h-20 max-w-{60px} rounded-full object-contain"
        />
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">{name}</p>
          <p className="text-sm block text-gray-300 font-semibold">{price}</p>
        </div>
        <div className="group flex  items-center gap-2 ml-auto cursor-pointer">
          <motion.div whileTap={{ scale: 0.75 }}>
            <BiMinus
              className="text-gray-50"
              onClick={() => updateQty(id, quantity - 1)}
            />
          </motion.div>
          <p className="w-5 h-5 rounded-sm bg-slate-400 text-gray-50 flex items-center justify-center">
            {quantity}
          </p>
          <motion.div whileTap={{ scale: 0.75 }}>
            <BiPlus
              className="text-gray-50 text-xl"
              onClick={() => updateQty(id, quantity + 1)}
            />
          </motion.div>
        </div>
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiX
            className="text-gray-50 text-3xl"
            onClick={() => removeCartItem(id)}
          />
        </motion.div>
      </div>
    </>
  );
};

export default CartCard