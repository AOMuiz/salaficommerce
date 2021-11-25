import React from "react";
import Button from "../../components/button";
import CartTable from "../../components/CartTable";
import { colors } from "../../constants/colors";
import ProductHeroSection from "../../components/cards/ProductHeroSection";

const Cart = () => {
  // const [cart, checkoutUrl] = useSelector();

  return (
    <>
      <ProductHeroSection
        title="Cart"
        info1="Home"
        info2="Product"
        info3="Cart"
      />
      <div className="container mx-auto mb-20 min-h-screen">
        <CartTable />
        <div className="flex justify-center flex-col max-w-sm mx-auto space-y-4 px-2">
          <Button name="Checkout" color={colors.secondary} />
          <Button name="Back to All Products" />
        </div>
      </div>
    </>
  );
};

export default Cart;
