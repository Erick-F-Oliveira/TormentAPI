import Weapon from "../models/Weapon.js";

//Controller para buscar todas as armas
const getAllWeapons = async (req, res) => {
  try {
    const weapon = await Weapon.find();
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar weapon" });
  }
};

//Controller para buscar arma pelo ID
const getWeaoiponById = async (req, res) => {
  const id = req.params.id;
  try {
    const weapon = await Weapon.findOne({ uniqueID: id });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar todas as armas" });
  }
};

//Controller para buscar arma pelo nome
const getWeaponByName = async (req, res) => {
  const name = req.params.name;
  try {
    const weapon = await Weapon.findOne({ name });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar arma pelo nome" });
  }
};

//Controller para buscar todas armas por quem cadastrou
const getWeaponByOperator = async (req, res) => {
  const username = req.params.username;
  try {
    const weapon = await Weapon.findOne({ operator: username });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar arma por cadastrante" });
  }
};

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

export {
  createWeapon,
  getAllWeapons,
  getWeaoiponById,
  getWeaponByName,
  getWeaponByOperator,
};
