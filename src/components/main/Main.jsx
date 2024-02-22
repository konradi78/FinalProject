import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from './Main.module.css'
import CategoryList from "./components/categories/CategoryList";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { fetchProducts } from "../../store/slices/productsSlice";
import GetDiscount from "./components/getDiscount/GetDiscount";
import SaleProductList from "./components/sale/SaleProductList";


function Main(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts())
      }, [dispatch]);
    
    return(
        <main>
            <section className={classes.mainBanner}>
            <h2 className={classes.bannerTitle}>Amazing Discounts on Garden Products!</h2>
            <button className={classes.checkBtn} onClick={() => {
                navigate("/sales");
            }}>Check out</button>
            </section>
            <CategoryList/>
            <GetDiscount/>
            <SaleProductList/>
        </main>
    )
}
export default Main