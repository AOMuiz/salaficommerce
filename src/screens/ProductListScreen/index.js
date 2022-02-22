import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";

import ProductHeroSection from "../../components/cards/ProductHeroSection";
import ShopCard from "../../components/cards/ShopCard";
import Loader from "../../components/loader";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    setLoading(false);
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div>
      <ProductHeroSection
        title="Product List"
        info1="Home"
        info2="Products"
        info3="All Categories"
      />
      {loading ? (
        <div className="flex justify-center items-center flex-col h-96">
          <Loader />
        </div>
      ) : (
        <section className=" body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center items-center">
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
        </section>
      )}
    </div>
  );
};

export default ProductList;
