//Pagina para mockar a pagina de dashboard enqaunto programo em hambiente virtual online (stackblitz, codespaces)
import React from "react";
import { Navigate } from "react-router-dom";
import style from "./Mock.module.css";
import Side from "../../components/Side";
import Card from "../../components/Card";
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

const Mock = () => {
  return (
    <>
      <div className={style.mock}>
        <Side />
        <div className={style.corpo}>
          <Card book={sampleBook} />
          <Card book={sampleBook} />
          <Card book={sampleBook} />
        </div>
      </div>
    </>
  );
};

export default Mock;
