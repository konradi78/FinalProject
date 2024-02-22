import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Sales from "./components/sales/Sales";
import Basket from "./components/basket/Basket";
import ProductsByCategories from "./components/products/components/ProductsByCategories";
import SingleProduct from "./components/products/SingleProduct";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="categories/:id" element={<ProductsByCategories />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
