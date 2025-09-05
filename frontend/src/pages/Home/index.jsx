import styles from "./Home.module.css";
import api from "../../Service/axios.service"
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    async function getItens() {
        const itens = await api.get("/api/users");
        console.log(api, "baseURL");
        console.log(itens.data);
    }
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const getItens = async () => {
            try {
                const response = await api.get("/api/users"); // Usa a instância `api` para fazer a requisição
                setItens(response.data); // Atualiza o estado com os dados recebidos
                //console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar itens:", error.message);
            }
        };
        getItens();
    }, []);
    return (
        <>
            <main className={styles.home}>
                <p className={styles.first}>TormemtAPI</p>
                <div className={styles.secund}>
                    <div className={styles.btnBox}>

                        {" "}


                    </div>
                </div>
            </main>
        </>
    );
}
export default Home;
