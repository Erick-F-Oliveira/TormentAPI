import express from "express";
import Router from "../Router.js";
import logger from "./utils/logger.js";

const startApi = async () => {
  const app = express();
  app.use(express.json());

  // Usa as rotas
  app.use("/api", Router);

  const PORT = 5000;
  app.listen(PORT, () => {
    logger.success("🔀 Rotas registradas. ✔");
    logger.success(`💻 Servidor rodando na porta ${PORT}. ✔`);
  });

  return app;
};

export default startApi;
