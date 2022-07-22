import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Card from "./Card";
import { BiSearch } from "react-icons/bi";
import { commerce } from "../lib/commerce";
import { motion } from "framer-motion";

const Menu = ({
  categories,
  allProducts,
  pastries,
  cakes,
  miniCakes,
  hotDeals,
  cart,
  onAddtoCart,
}) => {
  const [active, setActive] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {}, [active]);
  // useEffect(searchResult(), [active,searchTerm]);

  const MenuBars = ({ name }) => {
    const showMenu = () => {
      setActive(name);
      setSearchTerm("");
    };
    return (
      <motion.span
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-xl ${
          active === name
            ? "bg-white text-perry-color border border-blue-200"
            : "bg-perry-color text-white"
        } text-perry-color text-sm p-2 font-semibold  m-1 cursor-pointer transition-all ease-in-out duration-1000 hover:bg-blue-400 `}
        onClick={() => showMenu()}
      >
        {name}
      </motion.span>
    );
  };

  const fetchSearchData = async () => {
    const { data } = await commerce.products.list({ query: `${searchTerm}` });
    setSearchData(data);
    // console.log(data);
  };
  const searchResult = () => {
    fetchSearchData();
    setActive(searchTerm);
  };

  let display;
  const showProducts = () => {
    switch (active) {
      case "All":
        display = allProducts;
        break;
      case "Cakes":
        display = cakes;
        break;
      case "Mini-Cakes":
        display = miniCakes;
        break;
      case "Cakes":
        display = cakes;
        break;
      case "Pastries":
        display = pastries;
        break;
      case "Hot Deals":
        display = hotDeals;
        break;
      case searchTerm:
        display = searchData;
        break;
      default:
        display = searchData;
    }
  };

  showProducts();
  return (
    <>
      {/* <Nav /> */}
      <motion.h1
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl poiret text-perry-color mt-8 font-semibold"
      >
        Welcome To Our Store
      </motion.h1>
      <div className=" flex  flex-wrap  justify-center  p-2  ">
        <MenuBars name={"All"} key={"all"} />
        {categories &&
          categories
            .filter((category) => category.name !== "Banner")
            .map((category) => (
              <MenuBars key={category.id} name={category.name} />
            ))}
      </div>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center border  border-slate-300 w-2/3 md:w-1/3 ml-auto mr-auto rounded p-1"
      >
        <input
          type="search"
          name="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What are you craving?"
          className="w-full border-l-0 rounded focus:border focus:shadow-blue-300  focus:border-blue-300 focus:shadow-2xl focus:outline-none"
        />

        <BiSearch
          className="bg-white text-3xl border-r-0 rounded text-perry-color cursor-pointer"
          onClick={() => searchResult()}
        />
      </motion.div>
      <div className="flex flex-wrap justify-center p-2 gap-3">
        {display
          ? display.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price.formatted_with_symbol}
                img={product.image.url}
                cart={cart}
                description={product.description}
                onAddtoCart={onAddtoCart}
              />
            ))
          : "Item not found, We are cooking!!!"}
      </div>
    </>
  );
};

export default Menu;
