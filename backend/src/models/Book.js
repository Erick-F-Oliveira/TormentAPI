import {mongoose, Schema} from 'mongoose'

const bookSchema = new Schema(
  {
    //Controle
    uniqueID: { type: String, index: true, unique: true }, //Combinação de sequence+name+type+year
    sequence: { type: Number, index: true, unique: true }, 
    //Dados do livro
    title: { type: String, required: true },// Titulo do livro
    type: { type: String, required: true }, // ex: 'Romance', 'Quadrinho', 'Aventura'
    year: { type: Number, index: true, unique: true }, // Ano de publicação
    author: { type: String }, // Autor do livro
    notes: { type: String },  // informações extras ou explicações
    origin: { type: String, enum: ['oficial', 'homebrew'], default: 'oficial' },//Material oficial ou homebrew
    publisher: { type: String, default: "Jambô Editora" }, // Jambô Editora
    isbn: { type: String },//Codigo ISBN
    description: { type: String, required: true },//Uma breve descrição do livro
    operator: { type: String, required: true }//Quem cadastrou o livro
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