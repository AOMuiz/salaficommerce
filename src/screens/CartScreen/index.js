import React from "react";
import Button from "../../components/button";
import CartTable from "../../components/CartTable";
import { colors } from "../../constants/colors";
import ProductHeroSection from "../../components/cards/ProductHeroSection";
import CartTotalsCard from "../../components/cards/CardToolsCard";
import CalculateShipping from "../../components/cards/CaculateShipping";


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
          <div>
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
          <div>
            <h3 className="text-center p-10">Calculate Shipping</h3>
            <CalculateShipping
              buttontext="Calculate Shipping"
              name="Nigeria"
              state="Ilorin Kwara - 1200"
              code="Postal Code"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
