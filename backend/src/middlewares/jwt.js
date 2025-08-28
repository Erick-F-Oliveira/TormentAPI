import jwt from 'jsonwebtoken'

function checkToken(req, res, next) {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];

  if (!token) {
    console.log("Token não fornecido");
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret); // Verifica o token 
    console.log("Token decodificado:", decoded);

    const userId = decoded.id;
    console.log("ID do usuário:", userId);
    req.userId = userId; // Adiciona o ID do usuário ao objeto de requisição

    next(); // Chama o próximo middleware
  } catch (error) {
    console.error("Token inválido:", error);
    return res.status(403).json({ message: "Token inválido" });
  }
}

module.exports = checkToken;
