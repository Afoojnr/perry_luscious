import React from "react";
// import Welcome from './Welcome'
import Banner from "./Banner";
import About from "./About";

const Home = ({ banner, hotDeals, onAddtoCart,  }) => {
  return (
    <div>
      <Banner
        banner={banner}
        hotDeals={hotDeals}
        onAddtoCart={onAddtoCart}
       
      />
      <About />
    </div>
  );
};

export default Home;
