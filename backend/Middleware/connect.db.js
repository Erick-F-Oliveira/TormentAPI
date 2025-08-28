import chalk from 'chalk';

const connect = async function connect(mongoose, uri) {
  try {
    await mongoose.connect(uri);
     console.log(chalk.green('🌿 Conexão com o MongoDB estabelecida com sucesso. ✔'));
    return true; // Retorna verdadeiro se a conexão for bem-sucedida


  } catch (error) {
    console.error(chalk.bold.red('❌ Erro ao conectar ao MongoDB:'), error);
    throw error; // Propaga o erro para quem chamou a função
  }
}
export default connect