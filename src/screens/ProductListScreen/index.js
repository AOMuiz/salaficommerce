import React from "react";
import { useSelector } from "react-redux";
import ShopCard from "../../components/cards/ProductList";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);

  // const { id, title, price, image, description } = products;
  return (
    <div>
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
