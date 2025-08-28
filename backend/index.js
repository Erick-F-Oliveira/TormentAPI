import mongoose from "mongoose";
import connect from "./src/config/db.js";
import chalk from "chalk";
import startApi from "./src/start.api.js";

  try {
    // Conecta ao MongoDB
    await connect();   
    
    // Inicia a API
   await startApi();        
    
  } catch (error) {
    console.error(chalk.bold.red("❌ Erro ao iniciar o servidor:\n"), error);
    
  }


