import chalk from "chalk";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI || mongoUri;

const connect  = async () =>{
  try {
    await mongoose.connect(uri);
    console.log(chalk.green("🌿 Conexão com MongoDB estabelecida! ✔"));
    return true; // Retorna verdadeiro se a conexão for bem-sucedida
  } catch (error) {
    console.error(chalk.bold.red("❌ Erro ao conectar ao MongoDB:\n"), error);
    throw error; // Propaga o erro para quem chamou a função
  }
};
export default connect;
