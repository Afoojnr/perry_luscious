import React, { useState, useEffect, useRef } from "react";
import { commerce, Commerce } from "./lib/commerce";
import { Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Menu from "./components/Menu";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Home from "./components/Home";
import CartContainer from "./components/CartContainer";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  const [banner, setBanner] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [miniCakes, setMiniCakes] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const emptyCart = async () => {
    setCart(await commerce.cart.empty());
  };

  const handleCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };
  const updateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };
  const removeCartItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchHotDeals = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["hot-deals"],
    });
    setHotDeals(data);
  };
  const fetchCakes = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["cakes"],
    });
    setCakes(data);
  };
  const fetchPastries = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["pastries"],
    });
    setPastries(data);
  };
  const fetchMiniCakes = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["mini-cakes"],
    });
    setMiniCakes(data);
  };
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };
  const fetchBanner = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["banner"],
    });
    setBanner(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchHotDeals();
    fetchBanner();
    fetchCakes();
    fetchPastries();
    fetchMiniCakes();
    fetchCart();
  }, []);

  const location = useLocation();

  return (
    <div>
      {(location.pathname == "/menu" || location.pathname == "/about") && (
        <Nav
          cart={cart}
          emptyCart={emptyCart}
          updateQty={updateQty}
          removeCartItem={removeCartItem}
        />
      )}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="menu"
          element={
            <Menu
              categories={categories}
              allProducts={products}
              cakes={cakes}
              pastries={pastries}
              miniCakes={miniCakes}
              hotDeals={hotDeals}
              onAddtoCart={handleCart}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="cart"
          element={
            <CartContainer
              cart={cart}
              emptyCart={emptyCart}
              updateQty={updateQty}
              removeCartItem={removeCartItem}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {location.pathname == "/about" && <Footer />}
    </div>
  );
};

export default App;
