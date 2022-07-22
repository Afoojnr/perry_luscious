import React, { useState } from "react";
import Logo from "../img/logo_blue.png";
import { MdShoppingCart } from "react-icons/md";
// import {HiUser} from 'react-icons/hi'
import { BiMenu,BiX } from "react-icons/bi";
import CartContainer from "./CartContainer";
import { AnimatePresence, motion } from "framer-motion";
import { Link,NavLink } from "react-router-dom";
import {NavHashLink} from "react-router-hash-link"
import { useLocation } from "react-router-dom";


const variants ={
  open:{opacity:1 ,y:0},
  closed:{opacity:0, y:"-100%"}
}
const Nav = ({ cart }) => {
const location = useLocation();
const [openNav, setOpenNav] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className=" relative flex  justify-between px-2  py-1 w-full items-center ml-auto mr-auto bg-slate-100   shadow-md z-50 ">
        {/* <div className='flex'> */}
        {/* <img src={Logo} alt="logo" className="w-10 h-10 md:hidden" /> */}
        {location.pathname !== "/cart" ? (<motion.div whileHover={{scale:1.1}} whileTap={{scale:0.75}} className="md:hidden text-4xl text-perry-color transition-all ease-in">
          {openNav ?<BiX onClick={()=>setOpenNav(false)}/>:<BiMenu onClick={()=>setOpenNav(true)} />}
        </motion.div>): (<div></div>)}
        <div className="font-semibold text-2xl text-perry-color sacramento cursor-pointer">
          <Link to="/">Perry Luscious</Link>
        </div>
        {/* </div> */}
        <ul className=" hidden  md:flex gap-4 md:gap-12  items-center justify-center">
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor">
            <NavLink to="/menu">MENU</NavLink>
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor">
           <a href="https://wa.me/+2349030655243">CONTACT</a> 
          </li>
        </ul>
        <div className="flex gap-4 text-base text-textColor">
          {location.pathname !== "/cart" && (
            <div className="relative">
              <div>
                <NavLink to="/cart" onClick={()=>setOpenNav(false)}>
                  <MdShoppingCart className="  text-perry-color text-2xl cursor-pointer" />
                </NavLink>
              </div>
              <div className="text-white bg-perry-color rounded-full flex items-center justify-center w-4 h-4 absolute -top-2 -right-1">
                {cart ? cart.total_unique_items : 0}
              </div>
            </div>
          )}
        </div>
      </nav>
          {/* nav for mobile */}
    <motion.nav 
    // initial={{ opacity: 0, y: -30 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -50 }}
        
          animate={ openNav? "open": "closed"}
          variants={variants}
          transition={{duration:0.5}}
          
           className=" absolute w-full shadow-lg  ">
    
        <ul className=" flex flex-col bg-slate-100 z-50   p-1 md:hidden gap-4 md:gap-12 w-full text-center items-center justify-center ">
          <li className="text-base p-2  text-textColor  hover:text-headingColor   ">
            <NavLink to="/" onClick={()=>setOpenNav(false)}>HOME</NavLink>
          </li>
          <li className="text-base p-2 text-textColor  hover:text-headingColor">
            <NavLink to="/menu" onClick={()=>setOpenNav(false)}>MENU</NavLink>
          </li>
          <li className="text-base p-2 text-textColor  hover:text-headingColor">
            <NavLink to="/about" onClick={()=>setOpenNav(false)}>ABOUT</NavLink>
          </li>
          <li className="text-base p-2 text-textColor  hover:text-headingColor">
          <a href="https://wa.me/+2349030655243" onClick={()=>setOpenNav(false)}>CONTACT</a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Nav;
