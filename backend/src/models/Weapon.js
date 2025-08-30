import { model, Schema } from "mongoose";

let weaponSchema = new Schema(
  {
    //Controle
    uniqueID: { type: String, index: true, unique: true }, //Combinação de sequence+name+price+typeOfDamege
    sequence: { type: Number, index: true, unique: true }, //Gerado
    //Dados da arma
    name: { type: String, required: true },//Nome da arma
    proficiency: { type: String, required: true },//Tipo de proficiência necessária (ex: simples, marcial, exótica)
    proposite: { type: String, required: true },//Corpo a corpo, à distância, arremesso, etc
    hilt: { type: String, required: true },//Uma mão, duas mãos, leve, etc
    price: { type: Number, required: true },//Preço em Tibar
    baseDamage: { type: String, required: true },//Base de dano (ex: 1d6, 1d8, 2d6, etc)
    criticalDamage: { type: String, required: true },//Valor para acerto crítico e dano (ex: 19/x2, 20/x3, etc)
    typeOfDamage: { type: String, required: true },//Tipo de dano (ex: cortante, perfurante, contundente, etc)
    reach: { type: String, required: true },//Alcance (Corpo a corpo, curto, médio, longo, etc)
    space: { type: Number, required: true },//Espaço ocupado (ex: 1, 2, etc)
    origin: { type: String, enum: ["oficial", "homebrew"], default: "oficial" },//Material oficial ou homebrew
    author: { type: String, default: "Jambô Editora" },// Caso seja homebrew, quem criou
    reference: { type: String, required: true }, //Nome do meterial onde encontrar, ou link (caso seja um material apenas online)
    page: { type: Number },//Página onde encontrar a arma

    operator: { type: String, required: true }, //Pessoa que cadastrou
  },
  { timestamps: true }
);
// Gera uniqueID automaticamente
weaponSchema.pre("save", function (next) {
  if (
    this.isNew ||
    this.isModified("sequence", "name", "price", "typeOfDamage")
  ) {
    this.uniqueID =
      `${this.sequence}${this.name}${this.price}${this.typeOfDamage}`
        .toLowerCase()
        .replace(/\s+/g, "");
  }
  next();
});

const Weapon = model("Weapon", weaponSchema);
export default Weapon;
