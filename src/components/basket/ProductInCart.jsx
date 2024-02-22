import classes from "./Basket.module.css";
import { useState } from "react";
import deleteIcon from "../../assets/images/basket/x.svg";
import { url } from "../../assets/env"

function ProductInCart({productInCart, deletHandler, plusHandler, minusHandler}) {
  const [quantity, setQantity] = useState(productInCart.quantity);

  const prodMinusHandler = (id) => {
    if (quantity > 1) {
      minusHandler(id)
      setQantity(quantity - 1);
    }};
  const prodPlusHandler = (id) => {
    plusHandler(id)
    setQantity(quantity + 1);
  };
  
  return (
    <div className={classes.productInCart}>
      <img src={url + productInCart.image} className={classes.productInCartImg} alt="product-image"/>
      <div className={classes.productInfo}>
        <h5>{productInCart.title}</h5>
        <div className={classes.productProperties}>
          <div className={classes.productCounter}>
            <button onClick={() => prodMinusHandler(productInCart.id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => prodPlusHandler(productInCart.id)}>+</button>
          </div>
          <div className={classes.priceBlock}>
            <p className={classes.discountPrice}>${(productInCart.discont_price * quantity || productInCart.price * quantity).toFixed(2)}
            </p>
            {productInCart.discont_price ? (<p className={classes.price}>${(productInCart.price * quantity).toFixed(2)}</p>) 
            : null}
          </div>
        </div>
      </div>
      <img className={classes.deleteIcon} src={deleteIcon} alt="X" onClick={() => deletHandler(productInCart.id)}/>
    </div>
  );
}
export default ProductInCart;
