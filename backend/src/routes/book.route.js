import express from "express";
import { createBook, getAllBooks } from "../controllers/book.controller.js";
const router = express.Router();

//Busca todos os livros
router.get("/", getAllBooks);

//Rota de criação de livros
router.post("/", createBook);

export default router;
