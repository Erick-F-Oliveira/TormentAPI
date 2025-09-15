//Pagina para mockar a pagina de dashboard enqaunto programo em hambiente virtual online (stackblitz, codespaces)
import React from "react";
import { Link, Navigate } from "react-router-dom";
import style from "./Mock.module.css";
import Side from "../../components/Side";
import Card from "../../components/Card";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa6";
import { LuSwords, LuBookText } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";


const Mock = () => {
  return (
    <>
      <div className={style.mock}>
        <Side />
        <div className={style.corpo}>
          <Button
            color="tormenta" variant="contained"
            endIcon={<LuSwords />}
            component={Link}
            to="/mock"
          >
            Rota Armas
          </Button>
          <Button
            color="tormenta" variant="contained"
            endIcon={<LuBookText />}
            component={Link}
            to="/mock"
          >
            Rota Livros
          </Button>
          <Button
            color="tormenta" variant="contained"
            endIcon={<BsPerson />}
            component={Link}
            to="/mock"
          >
            Rota Personagens
          </Button>
        </div>
      </div>
    </>
  );
};

export default Mock;
