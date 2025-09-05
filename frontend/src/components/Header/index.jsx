import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
    return (
        <header className={styles.header}>
            <span>
                <Link to="/">TormentAPI</Link>
            </span>
            <nav>

            </nav>
        </header>
    );
}
export default Header;
