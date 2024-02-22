import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nameInputValidation, phoneInputValidation, emailInputValidation } from "../../../../utils/validations";
import classes from "./GetDiscount.module.css";
import handWithPlant from "../../../../assets/images/main/hand-with-plant.svg";
import { createDiscountReceiver } from "../../../../utils/createDiscountReceiver";
import { postDiscount } from "../../../../store/slices/getDiscountSlice";
import ModalWindowDiscount from "./ModalWindowDiscount";

function GetDiscount() {
  const dispatch = useDispatch();
  const [type, setType] = useState(false)
  let [marker, setMarker] = useState(false)
  const {register,
            handleSubmit, 
            reset, 
            formState: { errors } } = useForm({mode: "all"});
  function getDiscount(data) {
    setType(true)
    showModalWindow(marker);
    createDiscountReceiver(data);
    dispatch(postDiscount());
    reset();
  }
  function showModalWindow() {
    marker = setMarker(true);
    setTimeout(() => {
      setMarker(false);
    }, "3500");
  }
  function closeModalWindow() {
    setMarker(false);
  }
  return (
    <section className={classes.getDiscount}>
      <h4>5% off on the first order</h4>
      <div className={classes.sectionWrrapper}>
        <img src={handWithPlant} />
        <form onSubmit={handleSubmit(getDiscount)} className={classes.formWrapper}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", nameInputValidation)}
          />
          {errors.name && <p style={{ color: "#02393e" }}>{errors.name.message}</p>}
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone", phoneInputValidation)}
          />
          {errors.phone && (<p style={{ color: "#02393e" }}>{errors.phone.message}</p>)}
          <input
            type="text"
            placeholder="Email"
            {...register("email", emailInputValidation)}
          />
          {errors.email && (<p style={{ color: "#02393e" }}>{errors.email.message}</p>)}
          {!type ? <button className={classes.getDiscountBtn} type="submit">Get a discount</button> : <p className={classes.requestSubmited}>Request Submitted</p>}
        </form>
      </div>
      {marker !== false ? <ModalWindowDiscount close={closeModalWindow} /> : null}
    </section>
  );
}
export default GetDiscount;
