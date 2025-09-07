import styles from "./logingButton.module.css";
import api from "../../Service/axios.service";
import { FaDiscord } from "react-icons/fa";


function logingButton() {

  return (
    <>
      
        <a href="http://localhost:5000/api/auth/discord/login"> <span className={styles.btn}><FaDiscord /></span></a>
       
      
    </>
  );
}
export default logingButton;

