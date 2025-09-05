import styles from "./Home.module.css";
import api from '../../Service/axios.service.js'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    return (
        <>
            <main className={styles.home}>
                <p className={styles.first}>Faça o SEU calendário do advento </p>
                <div className={styles.secund}>
                    <div className={styles.btnBox}>
                        <Link to="/login">
                            {" "}
                            <button
                                onClick={getItens}
                                className={`${styles.btn} ${styles.btn_red}`}
                            >
                                Criar
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Home;