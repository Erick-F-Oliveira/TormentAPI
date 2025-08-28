import mongoose from "mongoose";
import Connect from "./Middleware/connect.db.js";
import chalk from "chalk";
import startApi from "./Middleware/start.api.js";

const mongoUri = "";

  try {
    // Conecta ao MongoDB
    await Connect(mongoose, mongoUri);   
    
    // Inicia a API
   await startApi();    
    
    
  } catch (error) {
    console.error(chalk.bold.red("❌ Erro ao iniciar o servidor:\n"), error);
    process.exit(1);
  }


