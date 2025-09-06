import styles from "./Auth.module.css";
import api from "../../Service/axios.service";
import { FaDiscord } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Auth() {

  return (
    <>
      <main className={styles.auth}>
        <p>Entre com sua conta do Discord<br/><span className={styles.btn}><FaDiscord /></span></p>
       
      </main>
      
    </>
  );
}
export default Auth;