import express from "express";
import chalk from "chalk";
import Router from "../Router.js";
import logRoutes from "./utils/logRoutes.js";

const startApi = async () => {
  const app = express();
  app.use(express.json());

  // Usa as rotas
  app.use("/api", Router);

  const PORT = 5000;
  app.listen(PORT, () => {
  
    console.log(chalk.green("🔀 Rotas registradas. ✔"));
    console.log(chalk.bold.green(`💻 Servidor rodando na porta ${PORT}. ✔`));
     
  });

  return app;
};

export default startApi;




     