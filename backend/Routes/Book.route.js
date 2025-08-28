import * as express from "express";
import * as chalk from "chalk";
import Book from "../Models/Book.js";
const router = express.Router();

//Busca todos os livros
router.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os livros" });
    console.error(chalk.bold.red("❌ Erro ao buscar todos os livros:\n"), error);
  }
});

export default router;