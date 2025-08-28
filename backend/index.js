import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './Routes/Weapon.route.js';
import connect from './Middleware/connect.db.js';
import chalk from 'chalk';

dotenv.config();

const app = express();
const PORT = 5000;

console.log("até aqui ok");

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rotas
app.use("/api", router);
console.log("até aqui ok");

// Conexão com MongoDB e inicialização do servidor
const mongoUri = "mongodb+srv://Obernac:%40Mongo25181891@bots-discord.jdcllyt.mongodb.net/Bots-discord-teste?retryWrites=true&w=majority";

try {
  await connect(mongoose, mongoUri);
  console.log(chalk.bold.green('🌿 Conexão com o MongoDB estabelecida com sucesso.✔'));

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

} catch (error) {
  console.error("Erro ao conectar ao MongoDB:", error);
}
console.log("ronaldo")