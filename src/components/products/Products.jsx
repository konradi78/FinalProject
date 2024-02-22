import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice"
import classes from "./Products.module.css"
import ProductCard from "./ProductCard";
import sortingProducts from "../../utils/filtration/sortingProducts";

function Products() {
  let products = useSelector((state) => state.products.products);
  let status = useSelector((state) => state.products.status);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortingWay, setSortingWay] = useState("byDefault");
  const dispatch = useDispatch();
  let [productsToRender, setProductsToRender] = useState([]);
  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    if (products) {
      let productsToRender = products.filter((product) => {
        const price = product.discont_price || product.price;
        return (
          (!showDiscounted || product.discont_price) &&
          (!minPrice || price >= minPrice) &&
          (!maxPrice || price <= maxPrice)
        );
      });
      productsToRender = sortingProducts(productsToRender, sortingWay);
      setProductsToRender(productsToRender);
    }
  }, [products, minPrice, maxPrice, showDiscounted, sortingWay]);
  const handleSortingWay = (e) => {
    setSortingWay(e.target.value);
  };
  const handleShowDiscountedChange = (e) => {
    setShowDiscounted(e.target.checked);
  };
  return (
    <main className={classes.productsMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">Main page</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} to="/products">All products</Link>
      </div>
      {status === "fulfilled" ?
        <>
          <h4 className={classes.title}>All products</h4>
          <section className={classes.setupBar}>
            <div className={classes.priceSetup}>
              <h5>Price</h5>
              <input placeholder="from" onChange={(e) => handleMinPriceChange(e)} />
              <input placeholder="to" onChange={(e) => handleMaxPriceChange(e)} />
            </div>
            <div className={classes.discountSetup}>
              <h5>Discounted items</h5>
              <input className={classes.checkbox} type="checkbox" checked={showDiscounted} onChange={handleShowDiscountedChange} />
            </div>
            <div className={classes.sortSetup}>
              <h5>Sorted</h5>
              <select
                onChange={handleSortingWay}
                onClick={toggleSelect}
              >
                <option value="default">by default</option>
                <option value="priceUp">by price up</option>
                <option value="priceDown">by price down</option>
                <option value="AZ">A-Z</option>
                <option value="new">new</option>
                <option value="old">old</option>
              </select>
            </div>
          </section>
          <ul className={classes.productWrapper}>
            {productsToRender.map((product) => {
              return (
                <ProductCard key={product.id} {...product} />
              );
            })}
          </ul>
        </>
        : <p>Loading...</p>}
    </main>
  )
}
export default Products