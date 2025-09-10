import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { FaGithub, FaArrowRight } from "react-icons/fa6";
import Button from "@mui/material/Button";

const sampleBook = {
  name: "Espada curta",
  proficiency: "Arma Simples",
  proposite: "Corpo a Corpo",
  hilt: "Leve",
  price: 10,
  baseDamage: "1d6",
  criticalDamage: "19",
  typeOfDamage: "Perfuração",
  reach: " Corpo a Corpo ",
  space: 1,
  description: "O tipo mais comum de espada...",
  reference: "Livro Básico JDA",
  page: 0,
  sequence: 2,
  operator: "obernac",
};

function Home() {
  return (
    <>
      <main className={styles.home}>
        <p>
          Ajude a construir a maior base de dados do <br />
          maior RPG do Brasil
        </p>
        Ainda estamos estruturando as coisas, se quiser ajudar você pode
        <br />
       
        <br />
      
        <div className={styles.btn}>
           Veja o repositório.
          <Button variant="contained" size="large">
            {" "}
            <FaGithub />{" "}
          </Button>
            Ou siga para autenticação.
          <Button
            variant="contained"
            endIcon={<FaArrowRight />}
            component={Link}
            to="/auth"
          >
            {" "}
            Seguir{" "}
          </Button>
        </div>
        {/*  <div className={styles.cards}>
          <Card book={sampleBook} />
          <Card book={sampleBook} />
  </div>*/}
      </main>
    </>
  );
}
export default Home;
