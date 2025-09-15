import { Link } from "react-router-dom";
import styles from "./Methods.module.css";
import Button from "@mui/material/Button";

function Methods() {
    return (
        <div className={styles.methods}>

            <Button variant="contained" component={Link} to="/weapons">GET</Button>
            /



        </div >
    );
}
export default Methods;
