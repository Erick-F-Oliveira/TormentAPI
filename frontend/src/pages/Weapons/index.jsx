import styles from "./Weapons.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { FaGithub, FaArrowRight } from "react-icons/fa6";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Methods from "../../components/Methods";




function Weapons() {
    return (
        <>
            <div className={styles.weapons}>
                <Methods />
                Armas
            </div>

        </>
    )
}

export default Weapons;