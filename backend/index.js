import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Weapon from "./Routes/Weapon.route.js";
import Connect from "./Middleware/connect.db.js";
import chalk from "chalk";
dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rotas
app.use("/", Weapon);

// Conexão com MongoDB e inicialização do servidor
const mongoUri =''
  

try {
  await Connect(mongoose, mongoUri);

  app.listen(PORT, () => {
    console.log(chalk.green(`💻 Servidor no ar, rodando na porta: ${PORT} ✔`));
  });
} catch (error) {
  console.error(chalk.bold.red("❌ Erro ao iniciar o servidor:\n"), error);
}

