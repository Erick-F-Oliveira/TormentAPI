import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
    return (
        <header className={styles.header}>

            <Link to="/"><h1>TormentAPI</h1></Link>



        </header >
    );
}
export default Header;
