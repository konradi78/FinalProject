import classes from './Products.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/slices/basketSlice';
import cartIcon from "../../assets/images/header/basket.svg"
import addedIcon from "../../assets/images/main/checkBoxActive.svg"
import {url} from "../../assets/env"
import { getDiscountValue } from '../../utils/discountValue';
function ProductCard(product) {
  const dispatch = useDispatch();
  const [marker, setMarker] = useState(false)
   const addHandler = (product) => {
    dispatch(addToCart(product))
    setMarker(true)
  }
  
 
  return (
    <li className={classes.productCard} key={product.id} >
      <Link to={`/products/${product.id}`} ><img src={url+product.image} className={classes.productImg} onClick={() => {localStorage.setItem("productID", JSON.stringify(product.id))}}/></Link>
      <div className={classes.productDescription}>
      <Link to={`/products/${product.id}`} ><span className={classes.productTitle} onClick={() => {localStorage.setItem("productID", JSON.stringify(product.id))}}>{product.title}</span></Link>
      {!marker ? <img className={classes.addToCartMobile} src={cartIcon} alt='toCart' onClick={() => addHandler(product)}/> : <img className={classes.addedToCartMobile} src={addedIcon} alt='addedToCart'/>}
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${product.discont_price || product.price}</p>
          {product.discont_price ? <p className={classes.price}>${product.price}</p> : null}
        </div>
        {product.discont_price ? <p className={classes.discount}>-{getDiscountValue(product)}%</p> : null}
      </div> 
      {!marker ? <button className={classes.addToCartBtn} onClick={() => addHandler(product)}>Add to cart</button> : <p className={classes.addedMessage}>Added</p>}
    </li>
  );
}
export default ProductCard;