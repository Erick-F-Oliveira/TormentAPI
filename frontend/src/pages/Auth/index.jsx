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
