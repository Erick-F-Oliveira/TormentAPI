import User from "../models/User.js";

const getUserInfo = async (req, res) => {
  // Apenas envia o objeto de usuário completo
  // O middleware isAuthenticated já garantiu que req.user existe
 res.status(200).json({
    isLoggedIn: true,
    user: req.user 
  });
};

export { getUserInfo };