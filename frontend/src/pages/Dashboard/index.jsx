import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import style from "./Dashboard.module.css";
import VerticalTabs from "../../components/Vertical";
import Methods from "../../components/Methods";

const Dashboard = () => {
  const { isLoggedIn, user, loading } = useAuth();
  const contribuition = 10;

  // 1. Exibe uma mensagem de carregamento enquanto a API busca o status.
  if (loading) {
    return <div>Carregando...</div>;
  }

  // 2. Garante que a rota está protegida, redirecionando se o usuário não estiver logado.
  // Essa é uma camada extra de segurança, já que a PrivateRoute já faz isso.
  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
    : "https://cdn.discordapp.com/embed/avatars/0.png"; // Avatar padrão
  // 3. Se tudo estiver certo, renderiza o dashboard
  return (
    <>
      <div className={style.dash}>
         <VerticalTabs
                tabs={[
                    { label: "Rotas", content: <Methods />, color: "#db2631", textColor: "#4c5b9a", selectedColor: "#738ADB" },//define uma cor exclusiva para essa seleção
                    { label: "Discord", content: "Configurações do Discord aqui" },
                    { label: "Tormenta", content: 
                    "tormenta"
                    },
                    { label: "Perfil", content: <div className={style.profile}>
          <h1>Bem-vindo, {user.username}!</h1>
          <img
            src={avatarUrl}
            alt="User Avatar"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
          <p>Este é o seu dashboard.</p>
          Você já contribuiu com {contribuition} arquivos
        </div>},

                ]}

            />
        
      </div>
    </>
  );
};

export default Dashboard;
