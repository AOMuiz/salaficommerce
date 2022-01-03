import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";

import ProductHeroSection from "../../components/cards/ProductHeroSection";
import ShopCard from "../../components/cards/ShopCard";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const { id, title, price, image, description } = products;

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  useEffect(() => {
    fetchProducts();
    return () => {};
  });

  console.log("Products:", products);

  return (
    <div>
      <ProductHeroSection
        title="Product List"
        info1="Home"
        info2="Products"
        info3="All Categories"
      />
      <div className="flex justify-center items-center flex-col">
        {products.map((product) => (
          <ShopCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={truncateString(product.description, 200)}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
