import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
// Импортируйте иконку корзины и логотип, если у вас есть отдельные файлы SVG или компоненты
// Пример: import { ReactComponent as ShoppingCartIcon } from './shopping-cart-icon.svg';
// Пример: import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* <Logo /> */}
                {/* Если у вас нет SVG, можно использовать img */}
                <img src="path_to_your_logo" alt="Logo" />
            </div>
            <nav className={styles.nav}>
                <Link to="/">Main Page</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/products">All products</Link>
                <Link to="/sales">All sales</Link>
            </nav>
            <div className={styles.shoppingCart}>
                {/* <ShoppingCartIcon /> */}
                {/* Если у вас нет SVG, можно использовать img */}
                <img src="path_to_your_cart_icon" alt="Shopping Cart" />
            </div>
        </header>
    );
};

export default Header;