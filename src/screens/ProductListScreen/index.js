import React from "react";
import { useSelector } from "react-redux";
import ProductHeroSection from "../../components/cards/ProductHeroSection";
import ShopCard from "../../components/cards/ProductList";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title, price, image, description } = products;

  return (
    <div>
      <ProductHeroSection
        title="Product List"
        info1="Home"
        info2="Products"
        info3="All Categories"
      />
      {products.map((product) => (
        <ShopCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
      ;
    </div>
  );
};

export default ProductList;
