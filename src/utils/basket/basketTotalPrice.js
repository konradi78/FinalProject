export const getTotalPrice = (productsInCart) => {
    let totalPrice = productsInCart.reduce((total, prod) => {
        return (total + (prod.discont_price * prod.quantity || prod.price * prod.quantity)
        );
      }, 0)
      .toFixed(2);
      return totalPrice
}