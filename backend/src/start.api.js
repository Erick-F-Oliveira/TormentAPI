import express from "express";
import * as dotenv from "dotenv";
import Router from "../Router.js";
import logger from "./utils/logger.js";
import cors from "cors";
import passport from "passport";
import passportConfig from "./config/passport.js";
import session from "express-session";
dotenv.config();
const secretSession = process.env.SECRET_SESSION;

const startApi = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: "*" }));

  // Configuração da sessão
  app.use(
    session({
      secret: secretSession, // string aleatória
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  passportConfig();

  // Usa as rotas
  app.use("/api", Router);

  const PORT = process.config.PORT||5000;
  app.listen(PORT, () => {
    logger.success("🔀 Rotas registradas. ✔");
    logger.success(`💻 Servidor rodando na porta ${PORT}. ✔`);
  });

  return app;
};

export default startApi;
