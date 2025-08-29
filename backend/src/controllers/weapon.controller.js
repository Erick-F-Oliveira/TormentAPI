import Weapon from "../models/Weapon.js";

//GET
//Controller para buscar todas as armas
const getAllWeapons = async (req, res) => {
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
  console.log("Chegou na controller");
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
    });

    await newWeapon.save();
    res.status(201).json(newWeapon);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao cadastrar arma", details: error.message });
  }
};

export { createWeapon, getAllWeapons };
