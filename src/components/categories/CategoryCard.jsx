import classes from './Categories.module.css'
import { useDispatch } from "react-redux";
import {fetchProductsOfCategory} from "../../store/slices/productsByCategoriesSlice";
import { Link } from 'react-router-dom';
import {url} from "../../assets/env"

function CategoryCard({id, title, image}) {
  const dispatch = useDispatch();
  function goToCategoryProducts() {
    dispatch(fetchProductsOfCategory({id}));
  }

  return (
    <li className={classes.categoryCard}>
      <Link to={`/categories/${id}`}><img src={url+image} className={classes.categoryImg} alt='Category-image' onClick={() => goToCategoryProducts(id)}/></Link>
      <Link to={`/categories/${id}`}><span className={classes.categoryTitle} onClick={() => goToCategoryProducts(id)} >{title}</span></Link>
    </li>
  );
}
export default CategoryCard