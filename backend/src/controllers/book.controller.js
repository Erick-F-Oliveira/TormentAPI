import Book from '../models/Book.js';

//GET
//Controller para buscar todos os livros
const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os livros" });
  }
};

//Controller para buscar arma pelo ISBN
const getBookById = async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const book = await Book.findOne({ isbn });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livro pelo codigo ISBN" });
  }
};

//Controller para buscar todos os livros por tipo (Livro, Quadrinho, Aventura)
const getBooksByType = async (req, res) => {
    const type = req.params.type;
  try {
    const book = await Book.find({ type });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar todos ${type}s` });
  }
};

//Controller para busar todos os livros de um determinado autor
const getBooksByAuthor = async (req, res) => {
    const author = req.params.author;
  try {
    const book = await Book.find({ author });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar todas obras de ${author}` });
  }
};

export { getAllBooks, getBookById, getBooksByType,getBooksByAuthor };