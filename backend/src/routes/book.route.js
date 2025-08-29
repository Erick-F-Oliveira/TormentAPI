import express from "express";
import { getAllBooks } from "../controllers/book.controller.js";
const router = express.Router();

//Busca todos os livros
router.get("/books", getAllBooks);

export default router;
