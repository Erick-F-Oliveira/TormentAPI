import styles from "./Home.module.css";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
      <main className={styles.home}>
        <p>Ajude a construir a<br/> maior base de dados do <br/>maior RPG do Brasil</p>
        <div className={styles.btn}>
        <Link to="/auth">Começar →</Link>
      </div>
      </main>
      
    </>
  );
}
export default Home;
