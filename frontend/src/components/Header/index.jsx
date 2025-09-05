import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
    return (
        <header className={styles.header}>

            <Link to="/"><img src="./logo.png" alt="Logo" className={styles.logo}></img></Link>


        </header >
    );
}
export default Header;
