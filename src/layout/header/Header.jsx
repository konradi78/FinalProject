import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import mainLogo from "../../assets/images/header/main-logo.svg";
import basketImg from "../../assets/images/header/basket.svg";
import menuIcon from "../../assets/images/header/menu.svg";
import closeAside from "../../assets/images/basket/x.svg";

function Header() {
  const navigate = useNavigate();
  const prodCount = useSelector(
    (state) => state.productsBasket.productsBasket.length
  );

  let [style, setStyle] = useState(null);
  const menuOpener = () => {
    {
      style = setStyle(classes.menuIsOpen);
    }
  };
  const menuCloser = () => {
    {
      style = setStyle(null);
    }
  };
  return (
    <>
      <header className={classes.headerDesktop}>
        <img
          id={classes.mainLogo}
          src={mainLogo}
          alt="main-logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <nav>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </nav>
        <img
          id={classes.basket}
          src={basketImg}
          alt="basket"
          onClick={() => {
            navigate("/basket");
          }}
        />
        {prodCount > 0 ? (
          <p className={classes.prodCount}>{prodCount}</p>
        ) : null}
      </header>
      <header className={classes.headerMobile}>
        <div className={classes.headerWrapper}>
          <div className={classes.iconWrapper}>
            <img
              id={classes.mainLogo}
              src={mainLogo}
              alt="main-logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <img
              id={classes.basket}
              src={basketImg}
              alt="basket"
              onClick={() => {
                navigate("/basket");
              }}
            />
            {prodCount > 0 ? (
              <p className={classes.prodCountMobile}>{prodCount}</p>
            ) : null}
          </div>
          <img
            className={classes.menuIcon}
            src={menuIcon}
            alt="menu"
            onClick={() => menuOpener()}
          />
        </div>
        <aside className={style}>
          <img
            className={classes.closeAside}
            src={closeAside}
            alt="X"
            onClick={() => menuCloser()}
          />
          <nav className={classes.navMobile}>
            <Link
              to="/"
            >
              Main Page
            </Link>
            <Link to="/categories" onClick={() => menuCloser()}>
              Categories
            </Link>
            <Link to="/products" onClick={() => menuCloser()}>
              All products
            </Link>
            <Link to="/sales" onClick={() => menuCloser()}>
              All sales
            </Link>
          </nav>
        </aside>
      </header>
    </>
  );
}
export default Header;
