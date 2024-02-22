import { Link } from "react-router-dom";
import classes from "./Categories.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <main className={classes.categoriesMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/" >Main page</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} to="/categories" >Categories</Link>
      </div>
      <h4 className={classes.title}>Categories</h4>
      <ul className={classes.categoryWrapper}>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </ul>
    </main>
  );
}
export default Categories;
