import React from 'react';
import styles from './styles.module.css';
// Если вы будете использовать иконки социальных сетей, импортируйте их отсюда.
// Пример: import { ReactComponent as InstagramIcon } from './instagram-icon.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactContainer}>
                <h4>Contact</h4>
                <p>Phone: +49 999 999 99 99</p>
                <p>Address: Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
            </div>
            <div className={styles.socialsContainer}>
                <h4>Socials</h4>
                {/* Замените div на соответствующие иконки */}
                <div className={styles.socialIcons}>
                    {/* <InstagramIcon /> */}
                    {/* Другие иконки социальных сетей */}
                </div>
            </div>
            <div className={styles.mapContainer}>
                {/* Используйте карту, например Google Maps. */}
            </div>
            <div className={styles.hoursContainer}>
                <h4>Working Hours</h4>
                <p>24 hours a day</p>
            </div>
        </footer>
    );
};

export default Footer;