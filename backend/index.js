import mongoose from "mongoose";
import Connect from "./Middleware/connect.db.js";
import chalk from "chalk";
import startApi from "./Middleware/start.api.js";

const mongoUri = "mongodb+srv://colaborador:72l7yniTFjT2EHUH@tormentapi.1psse7x.mongodb.net/?retryWrites=true&w=majority&appName=TormentAPI";

  try {
    // Conecta ao MongoDB
    await Connect(mongoose, mongoUri);   
    
    // Inicia a API
   await startApi();        
    
  } catch (error) {
    console.error(chalk.bold.red("❌ Erro ao iniciar o servidor:\n"), error);
    
  }


