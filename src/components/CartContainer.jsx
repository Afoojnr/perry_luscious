import React, { useState,useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";

const CartContainer = ({  cart, emptyCart, updateQty,
removeCartItem }) => {
  const navigate=useNavigate();
  const [checkOut,setCheckOut]=useState("")
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className=" w-full h-screen md:h-90vh bg-white drop-shadow-md flex flex-col  "
        >
          <div className="w-full flex items-center justify-between p-4 ">
            <motion.div whileTap={{ scale: 0.5 }}>
              <MdOutlineKeyboardBackspace
                className="text-textColor text-3xl cursor-pointer"
                onClick={() => navigate(-1)}
              />
            </motion.div>
            <p className="text-textColor text-lg font-semibold">Cart</p>

           {cart.hosted_checkout_url == undefined ||
              cart.line_items.length == 0
                ? <div></div>
                : ( <motion.p
              whileTap={{ scale: 0.75 }}
              className="flex item-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
              onClick={() => emptyCart()}
            >
              Clear <RiRefreshFill className="text-xl" />
            </motion.p>)}
          </div>
          {/* bottom section */}
          <div className="w-full h-full bg-slate-300 rounded-t-3xl flex flex-col ">
            <div className="w-full h-auto md:h-3/5 px-3  py-5 flex flex-col md:flex-row md:flex-wrap gap-2 overflow-y-auto justify-center ">
              {cart.line_items == undefined || cart.line_items.length == 0 ? (
                <div className="h-96 md:h-auto text-center"><div className="">Your Cart is empty</div><button
                className="poiret w-full p-1 text-sm text-white border cursor-pointer transition-all hover:transition-all hover:bg-white hover:bg-opacity-20 hover:font-extrabold font-semibold  "
                onClick={() => navigate("../menu")}
              >
                Order Now
              </button></div>
              ) : (
                cart.line_items.map((item) => (
                  <CartCard
                    key={item.id}
                    name={item.product_name}
                    price={item.line_total.formatted_with_symbol}
                    img={item.image.url}
                    quantity={item.quantity}
                    id={item.id}
                    updateQty={updateQty}
                    removeCartItem={removeCartItem}
                  />
                ))
              )}
            </div>
            {/* Cart total section */}
            {cart.hosted_checkout_url == undefined ||
              cart.line_items.length == 0
                ? ``
                : (<div className="w-full flex-1 bg-slate-700 rounded-t-lg rounded-b-xl flex flex-col items-center justify-evenly px-8 py-2">
              
              <div className="w-full border-b border-gray-600 my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-300 text-xl font-semibold">Sub Total</p>
                <p className="text-gray-300 text-xl font-semibold"> {cart.subtotal == undefined || cart.line_items.length == 0
                    ? 0
                    : cart.subtotal.formatted_with_symbol}</p>
              </div>
              
              <div className="flex flex-col md:flex-row w-full gap-1 md:w-1/2">
                <a
                  href={checkOut
                    
                  }
                  className="w-full"
                  onClick={() =>
                    // eslint-disable-next-line no-restricted-globals
                    window.confirm(
                      "Proceed to checkout. Click OK to confirm"
                    ) && setCheckOut(cart.hosted_checkout_url)
                  }
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="w-full   p-2 rounded-full bg-perry-color text-gray-50 text-lg my-2 hover:shadow-lg  "
                  >
                    Check out
                  </motion.button>
                </a>
                {/* <a
                  href={
                    cart.hosted_checkout_url == undefined ||
                    cart.line_items.length == 0
                      ? ``
                      : `https://wa.me/+2349030655243`
                  }
                  className="w-full"
                  onClick={() =>
                    // eslint-disable-next-line no-restricted-globals
                    window.confirm(
                      "You are about to go to another page for checkout. Click OK to confirm"
                    )
                  }
                >
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="w-full p-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg  "
                  >
                    Check out on WhatsApp
                  </motion.button>
                </a> */}
              </div>
            </div>)}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CartContainer;
