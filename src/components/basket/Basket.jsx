import classes from "./Basket.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nameInputValidation,
  phoneInputValidation,
  emailInputValidation,
} from "../../utils/validations";
import { createOrder } from "../../utils/basket/createOrder";
import { postOrder } from "../../store/slices/postOrderSlice";
import { deleteFromCart, plusCount, minusCount, eraser } from "../../store/slices/basketSlice";
import ModalWindow from "./ModalWindow";
import ProductInCart from "./ProductInCart";
import { getTotalPrice } from "../../utils/basket/basketTotalPrice";

function Basket() {
  const navigate = useNavigate();
  const productsInCart = useSelector((state) => state.productsBasket.productsBasket);
  const prodCount = useSelector((state) => state.productsBasket.productsBasket.length);
  const dispatch = useDispatch()
  const deletHandler = (productId) => {
    dispatch(deleteFromCart({ id: productId }))
  };
  const plusHandler = (productId) => {
    dispatch(plusCount({ id: productId }))
  };
  const minusHandler = (productId) => {
    dispatch(minusCount({ id: productId }))
  };
  let [marker, setMarker] = useState(false);

  function showModalWindow() {
    marker = setMarker(true);
    setTimeout(() => {
      setMarker(false);
    }, "3500");
  }

  function closeModalWindow() {
    setMarker(false);
  }

  const getOrder = (data) => {
    showModalWindow(marker);
    createOrder(data);
    dispatch(postOrder());
    dispatch(eraser())
    reset();

  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <main className={classes.basketMain}>
      <div className={classes.titleWrapper}>
        <h4>Shopping cart</h4>
        <div className={classes.grayLine}></div>
        <button onClick={() => navigate(-1)}>Back to the store</button>
      </div>
      {productsInCart.length === 0 ? (
        <div className={classes.basketEmpty}>
          <h5 className={classes.basketMessage}>
            Looks like you have no items in your basket currently.
          </h5>
          <button className={classes.continueBtn} onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
          <button className={classes.backLinkMobile} onClick={() => navigate(-1)}>Back to the store</button>
        </div>
      ) : (
        <div className={classes.basket}>
          <div className={classes.productsPart}>
            {productsInCart.map((productInCart) => {
              return (
                <ProductInCart
                  key={productInCart.id}
                  productInCart={productInCart}
                  deletHandler={deletHandler}
                  plusHandler={plusHandler}
                  minusHandler={minusHandler}
                />
              );
            })}
          </div>
          <div className={classes.orderDetailsPart}>
            <h5>Order details</h5>
            <p>
              {prodCount} {prodCount === 1 ? "item" : "items"}
            </p>
            <div className={classes.totalCost}>
              <p>Total</p>
              <p id={classes.totalPrice}>${getTotalPrice(productsInCart)}</p>
            </div>
            <form
              onSubmit={handleSubmit(getOrder)}
              className={classes.formWrapper}
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name", nameInputValidation)}
              />
              {errors.name && (
                <p
                  style={{
                    color: "#02393e",
                    fontSize: "16px",
                    marginTop: "5px",
                  }}
                >
                  {errors.name.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", phoneInputValidation)}
              />
              {errors.phone && (
                <p
                  style={{
                    color: "#02393e",
                    fontSize: "16px",
                    marginTop: "5px",
                  }}
                >
                  {errors.phone.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Email"
                {...register("email", emailInputValidation)}
              />
              {errors.email && (
                <p
                  style={{
                    color: "#02393e",
                    fontSize: "16px",
                    marginTop: "5px",
                  }}
                >
                  {errors.email.message}
                </p>
              )}
              <button type="submit">Order</button>
            </form>
          </div>
          <button className={classes.backLinkMobile} onClick={() => navigate(-1)}>Back to the store</button>
        </div>
      )}
      {marker !== false ? <ModalWindow close={closeModalWindow} /> : null}
    </main>
  );
}
export default Basket;
