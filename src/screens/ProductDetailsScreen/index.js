import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Loader from "../../components/loader";

import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productAction";
import ProductDetailsCard from "../../components/cards/ProductDetailsCard";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
    setLoading(false);
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <section className="text-gray-600 body-font overflow-hidden flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <ProductDetailsCard
          name={product.title}
          desc={product.description}
          price={product.price}
          image={product.image}
        />
      )}
      {/* https://dummyimage.com/400x400 */}
    </section>
  );
};

export default ProductDetail;
