import styles from "./Auth.module.css";
import api from "../../Service/axios.service";
import { FaDiscord } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

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
        <p>Entre com sua conta do Discord<br/><a href="http://localhost:5000/api/auth/discord/login"> <span className={styles.btn}><FaDiscord /></span></a></p>
       
      </main>
      
    </>
  );
}
export default Auth;

