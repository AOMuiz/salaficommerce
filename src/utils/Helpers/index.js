export function getCartSubTotal(cart) {
  if (cart.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    cart.forEach(
      (item) =>
        (totalPrice +=
          parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    );
    return Math.round(totalPrice * 100) / 100;
  }
}