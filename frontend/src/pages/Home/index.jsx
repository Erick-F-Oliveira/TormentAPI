import styles from "./Home.module.css";
import api from "../../Service/axios.service";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  return (
    <>
      <main className={styles.home}>
        <p>Ajude a construir a maior base de dados do maior RPG do Brasil</p>
      </main>
    </>
  );
}
export default Home;
