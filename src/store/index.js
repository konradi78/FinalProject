import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import getDiscountReducer from "./slices/getDiscountSlice"
import productsReducer from "./slices/productsSlice"
import productsByCategoriesReducer from "./slices/productsByCategoriesSlice"
import singleProductReducer from "./slices/singleProduct"
import postOrderReducer from "./slices/postOrderSlice"
import productBasketReducer from "./slices/basketSlice"

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    discountReceiver: getDiscountReducer,
    products: productsReducer,
    productsOfCategory: productsByCategoriesReducer,
    product: singleProductReducer,
    order: postOrderReducer,
    productsBasket: productBasketReducer,
    
  },
});