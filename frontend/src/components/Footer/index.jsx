import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className={styles.footer}>

            <ul className={styles.list}>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Privacidade</Link></li>
            </ul>


        </footer>
    );
}
export default Footer;
