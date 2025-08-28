import Weapon from "../models/Weapon.js";

const createWeapon = async (req, res) => {
  try {
    const {name, proficiency,proposite,hilt,price,baseDemage,criticalDamage,typeOfDamage,reach,space,origin,author,reference,page,operator} = req.body;
    const sequence = (await Weapon.countDocuments()) + 1
    const newWeapon = new Weapon({
      sequence,
      name,
      proficiency,
      proposite,
      hilt,
      price,
      baseDemage,
      criticalDamage,
      typeOfDamage,
      reach,
      space,
      origin,
      author,
      reference,
      page,
      operator
    });

    await newWeapon.save();
    res.status(201).json(newWeapon);


  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao cadastrar arma", details: error.message });
  }
};

export { createWeapon };