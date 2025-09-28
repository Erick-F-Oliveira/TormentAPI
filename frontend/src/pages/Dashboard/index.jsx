import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import style from "./Dashboard.module.css";
import VerticalTabs from "../../components/Vertical";
import Methods from "../../components/Methods";
import api from "../../Service/axios.service";

// Função para buscar livros
function fetchBooks() {
  return api
    .get("/books")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao buscar livros:", error);
      return [];
    });
}

const Dashboard = () => {
  const { isLoggedIn, user, loading: authLoading } = useAuth();

  // Estados para os livros e carregamento
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true);

  // Carrega os livros assim que o componente montar
  useEffect(() => {
    const loadBooks = async () => {
      setBooksLoading(true);
      const data = await fetchBooks();
      setBooks(data);
      setBooksLoading(false);
    };

    loadBooks();
  }, []); // Garante que seja executado apenas uma vez, na montagem

  // 1. Carregando autenticação
  if (authLoading) {
    return <div>Carregando...</div>;
  }

  // 2. Proteção de rota
  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
    : "https://cdn.discordapp.com/embed/avatars/0.png";


  const contribuition = books.filter(book => book.operator === user.discordId).length;

  return (
    <>
      <div className={style.dash}>
        <VerticalTabs
          tabs={[
            {
              label: "Rotas",
              content: <Methods />,
              color: "#db2631",
              textColor: "#4c5b9a",
              selectedColor: "#738ADB",
            },
            {
              label: "Discord",
              content: "Configurações do Discord aqui",
            },
            {
              label: "Tormenta",
              content: booksLoading ? (
                <p>Carregando livros...</p>
              ) : books.length > 0 ? (
                <ul>
                  {books.map((book) => (
                    <li key={book.id}>{book.title}</li> // ajuste conforme a estrutura do seu objeto book
                  ))}
                </ul>
              ) : (
                <p>Nenhum livro encontrado.</p>
              ),
            },
            {
              label: "Perfil",
              content: (
                <div className={style.profile}>
                  <h1>Bem-vindo, {user.username}!</h1>
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                  />
                  <p>Este é o seu dashboard.</p>
                  Você já contribuiu com {contribuition} arquivos
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Dashboard;