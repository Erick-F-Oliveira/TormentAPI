import express from "express";
import Weapon from "./Routes/Weapon.route.js";
import Book from "./Routes/Book.route.js";
const router = express.Router();

// Rotas de armas
router.use("/weapon", Weapon);
// Rotas de livros
router.use("/book", Book);

// Se não achou rota no router
router.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada dentro do Router" });
});

export default router;
