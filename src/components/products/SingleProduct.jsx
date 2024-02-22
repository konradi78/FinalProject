import classes from "./SingleProduct.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchProductsOfCategory } from "../../store/slices/productsByCategoriesSlice";
import { addToCart } from "../../store/slices/basketSlice";
import { changeQuantity } from "../../store/slices/basketSlice";
import loadingImg from "../../assets/images/main/loading_icon.svg"
import {url} from "../../assets/env.js"
import { fetchSingleProduct } from '../../store/slices/singleProduct';
import { getDiscountValue } from "../../utils/discountValue.js";
import { getCategoryTitle } from "../../utils/filtration/switcherCategory.js";
function SingleProduct() {
  let product = useSelector((state) => state.product.product[0]);
  let status = useSelector((state) => state.product.status);
  let [marker, setMarker] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct({id : localStorage.getItem("productID")}))
  }, [dispatch]);
  
  function goToCategoryProducts() {
    if(status === "fulfilled"){
    dispatch(fetchProductsOfCategory({ id: product.categoryId }));
  }}
  const addHandler = (product, quantity) => {
    if(status === "fulfilled"){ 
    dispatch(addToCart(product, quantity));
    setMarker(true)}
  };
  const [quantity, setQantity] = useState(1);
  const minusHandler = () => {
    if (quantity > 1) {
      setQantity(quantity - 1);
      dispatch(changeQuantity(quantity - 1));
    }
  };
  const plusHandler = () => {
    setQantity(quantity + 1);
    dispatch(changeQuantity(quantity + 1));
  };
 
  return (
    <main className={classes.singleProductMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">
          Main page
        </Link>
        <div className={classes.greyLine}></div>
        <Link className={classes.links} to="/categories">
          Categories
        </Link>
        <div className={classes.greyLine}></div>
        <Link
          className={classes.links}
          to={`/categories/${product.categoryId}`}
          onClick={() => goToCategoryProducts()}
        >
          {getCategoryTitle(product)}
        </Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink}>{product.title}</Link>
      </div>
      <h4 className={classes.singleProductTitleMobile}>{product.title}</h4>
      <div className={classes.singleProductWrapper}>
        <img
          className={classes.singleProductImage}
          src={status === "fulfilled" ? url + product.image : loadingImg}
          alt="product_photo"
        />
        <div className={classes.singleProductInfo}>
          <h4 className={classes.singleProductTitle}>{product.title}</h4>
          <div className={classes.priceBlock}>
            <p className={classes.discountPrice}>
              $
              {(product.discont_price * quantity ||
                product.price * quantity).toFixed(2)}
            </p>
            {product.discont_price ? (
              <p className={classes.price}>${(product.price * quantity).toFixed(2)}</p>
            ) : null}
            {product.discont_price ? (
              <p className={classes.discount}>-{getDiscountValue(product)}%</p>
            ) : null}
          </div>
          <div className={classes.basketSetupBar}>
            <div className={classes.quantityBlock}>
              <button onClick={() => minusHandler()}>-</button>
              <p>{quantity}</p>
              <button onClick={() => plusHandler()}>+</button>
            </div>
            {!marker ? <button
              className={classes.toCartBtn}
              onClick={() => addHandler(product, quantity)}
            >
              Add to cart
            </button> : <p className={classes.addedMessage}>Added</p>}
          </div>
          <div className={classes.descriptionWrapperDesktop}>
          <h5 className={classes.descr}>Description</h5>
          <p className={classes.singleProductDescription}>
            {product.description}
          </p>
          </div>
        </div>
        <div className={classes.descriptionWrapperMobile}>
          <h5 className={classes.descr}>Description</h5>
          <p className={classes.singleProductDescription}>
            {product.description}
          </p>
          </div>
      </div>
    </main>
  );
}
export default SingleProduct;
