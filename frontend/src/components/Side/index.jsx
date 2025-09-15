import styles from "./Side.module.css";
import { Link } from "react-router-dom";
function Side() {
    return (
        <div className={styles.side}>

            <ul className={styles.list}>
                <li><Link to="/">Perfil</Link></li>
                <li><Link to="/">Ajuda</Link></li>
            </ul>


        </div>
    );
}
export default Side;