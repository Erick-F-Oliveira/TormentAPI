import styles from "./Side.module.css";
import { Link } from "react-router-dom";
function Side() {
    return (
        <Side className={styles.Side}>

            <ul className={styles.list}>
                <li><Link to="/">Perfil</Link></li>
                <li><Link to="/">Ajuda</Link></li>
            </ul>


        </Side>
    );
}
export default Side;