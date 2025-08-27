import mongoose from 'mongoose'

const bookSchema = new Schema(
  {
    uniqueID: { type: String, index: true, unique: true },
    title: { type: String, required: true },
    type: { type: String, required: true }, // ex: 'Livro', 'Quadrinho', 'Aventura'
    edition: { type: String, required: true }, // edição do livro
    year: { type: Number, index: true, unique: true }, // ano de publicação
    author: { type: String }, // quem criou o material homebrew
    notes: { type: String },  // informações extras ou explicações
    origin: { type: String, enum: ['oficial', 'homebrew'], default: 'oficial' },
    publisher: { type: String, required: true }, // Jambô Editora
    isbn: { type: String },
    description: { type: String, required: true },
    sequence: { type: Number, index: true, unique: true },
    operator: { type: String, required: true }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;