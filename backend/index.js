import mongoose from "mongoose";
import connect from "./src/config/db.js";
import chalk from "chalk";
import startApi from "./src/start.api.js";
import logger from "./src/utils/logger.js";

  try {
    // Conecta ao MongoDB
    await connect();   
    
    // Inicia a API
   await startApi();        
    
  } catch (error) {
    logger.error(`Erro ao iniciar o servidor:\n ${error}`);
    
  }


