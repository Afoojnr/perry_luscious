import React from 'react'
import Card from '../components/Card'

const Banner = ({ banner, hotDeals, onAddtoCart }) => {
  return (
    <>
      <div className="text-center mt-8">
        <h2 className="poiret text-perry-color text-xl font-semibold">
          Our Popular Bakery Products
        </h2>
        <p className="text-sm ml-2">
          Check out some of our products and feel the great passion for food
        </p>

        <div className="flex flex-wrap p-2 justify-center gap-3">
          {banner.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price.formatted_with_symbol}
              img={product.image.url}
              description={product.description}
              onAddtoCart={onAddtoCart}
            />
          ))}
          {hotDeals.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price.formatted_with_symbol}
              img={product.image.url}
              description={product.description}
              onAddtoCart={onAddtoCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner