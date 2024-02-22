import classes from './Footer.module.css'
import instagramIcon from '../../assets/images/footer/ic-instagram.svg'
import whatsappIcon from '../../assets/images/footer/ic-whatsapp.svg'
function Footer(){
    return(
        <footer>
            <h3 className={classes.title}>Contact</h3>
            <div className={classes.phone}>
                <h4>Phone</h4>
                <p>+49 999 999 99 99</p>
            </div>
            <div className={classes.socials}>
                <h4>Socials</h4>
                <div className={classes.socialsWrapper}>
                    <img src={instagramIcon} alt='instagram' />
                    <img src={whatsappIcon} alt='whatsapp' />
                </div>
            </div>
            <div className={classes.address}>
                <h4>Address</h4>
                <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
            </div>
            <div className={classes.workingHours}>
                <h4>Working Hours</h4>
                <p>24 hours a day</p>
            </div>
                <iframe className={classes.gMap} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.50899197891505!2d13.375319817128796!3d52.508032797832186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sgr!4v1700724981306!5m2!1sru!2sgr" 
                     title="tel-run">
                </iframe>
        </footer>
    )
}
export default Footer