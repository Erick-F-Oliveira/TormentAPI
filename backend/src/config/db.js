import chalk from "chalk";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import logger from "../utils/logger.js";
dotenv.config();
const uri = process.env.MONGO_UI;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    logger.success("🌿 Conexão com MongoDB estabelecida! ✔");
    return true; // Retorna verdadeiro se a conexão for bem-sucedida
  } catch (error) {
    logger.error(`Erro ao conectar ao MongoDB:\n ${error}`);
    throw error; // Propaga o erro para quem chamou a função
  }
};
export default connect;
