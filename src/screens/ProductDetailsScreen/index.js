import { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectedProduct } from "../../redux/actions/productAction";
import ProductDetailsCard from "../../components/cards/ProductDetailsCard";

const ProductDetail = () => {
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
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    console.log("Products:", product);
  }, [productId]);

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <ProductDetailsCard
        name={product.title}
        desc={product.description}
        price={product.price}
        image={product.image}
      />
      {/* https://dummyimage.com/400x400 */}
    </section>
  );
};

export default ProductDetail;
