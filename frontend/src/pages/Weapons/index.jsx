import styles from "./Weapons.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { FaGithub, FaArrowRight } from "react-icons/fa6";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Methods from "../../components/Methods";
import VerticalTabs from "../../components/Vertical";




function Weapons() {
    return (<>
        <div className={styles.weapons}>
            <VerticalTabs
                tabs={[
                    { label: "Rotas", content: <Methods />, color: "#db2631", textColor: "#4c5b9a", selectedColor: "#738ADB" },//define uma cor exclusiva para essa seleção
                    { label: "Discord", content: "Configurações do Discord aqui" },
                    { label: "Tormenta", content: <strong>Conteúdo customizado</strong> },
                    { label: "Perfil", content: "Página do usuário" },

                ]}

            />
        </div>
    </>

    );
}

export default Weapons;