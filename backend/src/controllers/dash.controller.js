import User from "../models/User.js";

//GET
//Controller para trazer as informações do usuário logado
const getDash = async (req, res) => {
  const username = req.user.username;
 try{
res.status(200).json({ message: `Bem-vindo ao dashboard, ${username}!` });
 }catch (error) {
  res.status(500).json({ error: "Erro ao exibir dashboard" });
 }

};

export { getDash };