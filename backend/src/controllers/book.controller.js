import Book from "../models/Book.js";
import bookSchema from "../schemas/book.joi.js";

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

//POST
//Controller para cadastrar um novo livro
const createBook = async (req, res) => {
  const { error, value } = bookSchema.validate(req.body);
  if (error) {
    // Retorna erro 400 se a validação falhar
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const sequence = (await Book.countDocuments()) + 1;
    const newBook = new Book({
      sequence,
      ...value,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o livro" });
  }
};

export { getAllBooks, createBook };
