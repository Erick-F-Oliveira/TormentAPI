import Weapon from "../models/Weapon.js";
import weaponSchema from '../schemas/weapon.joi.js';

//GET
//Controller para buscar todas as armas
const getWeapons = async (req, res) => {
  const allowedFields = [
    "name",
    "author",
    "origin",
    "operator",
    "typeOfDamage",
    "hilt",
    "proficiency",
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
    const weapon = await Weapon.find(filter);
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar weapon" });
  }
};

//POST
//Controller para criar uma nova arma
const createWeapon = async (req, res) => {
 
    const { error, value } = weaponSchema.validate(req.body);
    if (error) {
    // Retorna erro 400 se a validação falhar
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const {
      name,
      proficiency,
      proposite,
      hilt,
      price,
      baseDamage,
      criticalDamage,
      typeOfDamage,
      reach,
      space,
      origin,
      author,
      reference,
      page,
      operator,
    } = req.body;
    const sequence = (await Weapon.countDocuments()) + 1;
  
    const newWeapon = new Weapon({
      sequence,
        ...value,
    /*  name,
      proficiency,
      proposite,
      hilt,
      price,
      baseDamage,
      criticalDamage,
      typeOfDamage,
      reach,
      space,
      origin,
      author,
      reference,
      page,
      operator,
      */
    });

    await newWeapon.save();
    res.status(201).json(newWeapon);
  } catch (error) {
        if (error.code === 11000) {
      return res.status(400).json({ error: "Já existe uma arma este nome." });
        }
    res
      .status(500)
      .json({ error: "Erro ao cadastrar arma", details: error.message });
  }
};

//PATCH
//Controller para atualizar uma arma existente
 const editWeapon = async (req, res) => {
   const uniqueID = req.params;
   const newData = req.body;
    try {
      const updatedWeapon = await Weapon.findOneAndUpdate({uniqueID}, newData, { new: true });
      if (!updatedWeapon) {
        return res.status(404).json({ error: "Arma não encontrada" });
      }
      res.status(200).json(updatedWeapon);
    }catch (error) {
     res
       .status(500)
       .json({ error: "Erro ao atualizar arma", details: error.message });
   }

 }


export { createWeapon, getWeapons, editWeapon };
