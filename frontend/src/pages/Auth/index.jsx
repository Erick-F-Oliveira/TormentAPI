import styles from "./Auth.module.css";
import api from "../../Service/axios.service";
import { FaDiscord } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";


const Auth = () => {
  const { isLoggedIn, loading, user } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se o usuário JÁ estiver logado, redireciona para o dashboard
  // Isso evita que ele veja a tela de login novamente
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <main className={styles.auth}>
        <div className={styles.text}>
          <p>Antes de começar, precisamos que você se autentique com uma conta do Discord.</p><br />
          Isso é importante para que possamos manter um controle melhor de quem está fazendo
          o cadstro das informações na API, pelo menos nesse primeiro momento.<br />
          Com a autenticação nós usamos as informaçõs de perfil e email que o discord fornece.
          Usamos seu Username como o nome as ser exibido e seu Avatar.<br />
        </div>
        <p>
          Autentique-se
          <br />
          <a href="http://localhost:5000/api/auth/discord/login">
            {" "}
            <Button variant="contained" color="discord">
              <FaDiscord fontSize={"45px"} />
            </Button>
          </a>
        </p>
      </main>
    </>
  );
};
export default Auth;
