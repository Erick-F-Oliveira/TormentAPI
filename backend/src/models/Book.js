import {mongoose, Schema} from 'mongoose'

const bookSchema = new Schema(
  {
    //Controle
    uniqueID: { type: String, index: true, unique: true }, //Combinação de sequence+name+type+year
    sequence: { type: Number, index: true, unique: true }, 
    //Dados do livro
    title: { type: String, required: true },
    type: { type: String, required: true }, // ex: 'Livro', 'Quadrinho', 'Aventura'
    year: { type: Number, index: true, unique: true }, // ano de publicação
    author: { type: String }, // quem criou o material homebrew ou autor do livro
    notes: { type: String },  // informações extras ou explicações
    origin: { type: String, enum: ['oficial', 'homebrew'], default: 'oficial' },
    publisher: { type: String, default: "Jambô Editora" }, // Jambô Editora
    isbn: { type: String },
    description: { type: String, required: true },
    operator: { type: String, required: true }
  },
  { timestamps: true }
);
// Gera uniqueID automaticamente
bookSchema.pre("save", function (next) {
  if (
    this.isNew ||
    this.isModified("sequence", "name", "type", "year")
  ) {
    this.uniqueID =
      `${this.sequence}${this.name}${this.type}${this.year}`
        .toLowerCase()
        .replace(/\s+/g, "_");
  }
  next();
});


const Book = mongoose.model("Book", bookSchema);
export default Book;