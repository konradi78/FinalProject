import classes from "./GetDiscount.module.css"
import closeIcon from "../../../../assets/images/basket/xWhite.svg"
function ModalWindowDiscount ({close}){
    return(
        <div className={classes.modalWindowWrapper}>
            <div className={classes.modalWindow}>
                <div className={classes.message}>
                    <h5>Request Submitted</h5>
                    <h6>You will receive a code by email</h6>
                </div>
                <img src={closeIcon} alt="X" onClick={() => close()}/>
            </div>
        </div>
    )
}
export default ModalWindowDiscount