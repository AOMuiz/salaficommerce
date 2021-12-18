import React from "react";
import Button from "../../components/button";
import CartTable from "../../components/CartTable";
import { colors } from "../../constants/colors";
import ProductHeroSection from "../../components/cards/ProductHeroSection";
import CartTotalsCard from "../../components/cards/CardToolsCard";

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
      <div className="container mx-auto mb-20 min-h-screen flex justify-evenly">
        <div>
          <CartTable />
          <div className="flex justify-center flex-col max-w-sm mx-auto space-y-4 px-2">
            <Button name="Checkout" color={colors.secondary} />
            <Button name="Back to All Products" />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-center p-10">Cart Totals</h3>
          <CartTotalsCard
            subtotal="SubTotals"
            price="$250"
            total="Totals"
            price2="$370"
            text="Shipping & taxes calculated at checkout"
            buttontext="Proceed to Checkout"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
