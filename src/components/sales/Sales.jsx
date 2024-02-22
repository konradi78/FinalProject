import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice"
import classes from "../products/Products.module.css"
import ProductCard from "../products/ProductCard";
import sortingProducts from "../../utils/filtration/sortingProducts";

function Sales() {
  const products = useSelector((state) => state.products.products);
  let status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  let [discountedItems, setDiscountedItems] = useState([]);

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortingWay, setSortingWay] = useState("byDefault");

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
    if (products) {
      let discountedItems = products.filter((product) => product.discont_price);
      discountedItems = discountedItems.filter((product) => {
        const price = product.discont_price || product.price;
        return (
          (!minPrice || price >= minPrice) &&
          (!maxPrice || price <= maxPrice)
        );
      });
      discountedItems = sortingProducts(discountedItems, sortingWay);
      setDiscountedItems(discountedItems);
    }
  }, [products, minPrice, maxPrice, sortingWay]);

  const handleSortingWay = (e) => {
    setSortingWay(e.target.value);
  };
  return (
    <main className={classes.productsMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">Main page</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} to="/sales">All sales</Link>
      </div>
      {status === "fulfilled" ?
        <>
          <h4 className={classes.title}>Discounted items</h4>
          <section className={classes.setupBar}>
            <div className={classes.priceSetup}>
              <h5>Price</h5>
              <input placeholder="from" onChange={(e) => handleMinPriceChange(e)} />
              <input placeholder="to" onChange={(e) => handleMaxPriceChange(e)} />
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
            {discountedItems.map((discountedItem) => {
              return (
                <ProductCard key={discountedItem.id} {...discountedItem} />
              );
            })}
          </ul>
        </>
        : <p>Loading...</p>}
    </main>
  )
}
export default Sales