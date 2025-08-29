import Book from "../models/Book.js";

//GET
//Controller para buscar todos os livros, ou com filtros
const getAllBooks = async (req, res) => {
  const allowedFields = [
    "name",
    "author",
    "origin",
    "operator",
    "isbn",
    "type",
    "year",
    "publisher",
  ];

  const filter = {};

  for (const key in req.query) {
    if (allowedFields.includes(key)) {
      const value = req.query[key];
      // Aplica regex em campos de texto
      if (["name", "author", "operator"].includes(key)) {
        filter[key] = { $regex: value, $options: "i" };
      } else {
        filter[key] = value;
      }
    }
  }
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os livros" });
  }
};

export { getAllBooks, getBookById, getBooksByType, getBooksByAuthor };
