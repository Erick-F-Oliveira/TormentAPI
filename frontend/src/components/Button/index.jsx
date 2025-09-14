import styles from "./Button.module.css";
import api from "../../Service/axios.service";
import { FaDiscord } from "react-icons/fa";


function Button() {

    return (
        <Button
            variant="outlined"
            sx={{
                width: '300px', // ou '100%', '20rem'
                height: '60px', // ou '5rem', etc.
                fontSize: '20px', // Aumenta o tamanho da fonte
                padding: '10px 20px', // Ajusta o espaçamento interno
            }}
        >
            <FaDiscord />
        </Button>
    )
}

export default Button;