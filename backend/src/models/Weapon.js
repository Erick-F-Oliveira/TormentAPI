import { model, Schema } from "mongoose";

let weaponSchema = new Schema(
  {
    //Controle
    uniqueID: { type: String, index: true, unique: true }, //Combinação de sequence+name+price+typeOfDamege
    sequence: { type: Number, index: true, unique: true }, //Gerado
    //Dados da arma
    name: { type: String, required: true },
    proficiency: { type: String, required: true },
    proposite: { type: String, required: true },
    hilt: { type: String, required: true },
    price: { type: Number, required: true },
    baseDemage: { type: String, required: true },
    criticalDamage: { type: String, required: true },
    typeOfDamage: { type: String, required: true },
    reach: { type: String, required: true },
    space: { type: Number, required: true },
    origin: { type: String, enum: ["oficial", "homebrew"], default: "oficial" },
    author: { type: String,default: "Jambô Editora" },
    reference: { type: String, required: true }, //Nome do meterial onde encontrar, ou link (caso seja um material apenas online)
    page: { type: Number },

    operator: { type: String, required: true }, //Pessoa que cadastrou
  },
  { timestamps: true }
);
// Gera uniqueID automaticamente
weaponSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('sequence', 'name', 'price', 'typeOfDamage')) {
    this.uniqueID = `${this.sequence}${this.name}${this.price}${this.typeOfDamage}`
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
  next();
});

const Weapon = model("Weapon", weaponSchema);
export default Weapon;
