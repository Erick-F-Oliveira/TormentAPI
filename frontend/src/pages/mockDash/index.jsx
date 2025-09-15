//Pagina para mockar a pagina de dashboard enqaunto programo em hambiente virtual online (stackblitz, codespaces)
import React from "react";
import { Navigate } from "react-router-dom";
import style from "./Mock.module.css";
import Side from "../../components/Side";

const Mock = () => {
    return (


        <>
            <Side>
                <div className={style.mock}>
                    <p>MOCK</p>
                </div>
            </Side>


        </>
    );

}

export default Mock;