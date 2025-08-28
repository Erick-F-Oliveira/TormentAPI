import * as express from "express";
import * as chalk from "chalk";
import Weapon from "../Models/Weapon.js";
const router = express.Router();

// Busca todos as armas
router.get("/weapons", async (req, res) => {
  try {
    const weapon = await Weapon.find();
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar weapon" });
    console.error(chalk.bold.red("❌ Erro ao buscar weapon:\n"), error);
  }
});

// Busca armas pelo ID
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const weapon = await Weapon.findOne({ uniqueID: id });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar todas as armas" });
    console.error(chalk.bold.red("❌ Erro ao buscar todas as armas:\n"), error);
  }
});

// Busca armas pelo Nome
router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const weapon = await Weapon.findOne({ name });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar arma pelo nome" });
    console.error(chalk.bold.red("❌ Erro ao buscar arma pelo nome:\n"), error);
  }
});

// Busca todas armas por quem cadastrou
router.get("/operator/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const weapon = await Weapon.findOne({ operator: username });
    res.status(200).json(weapon);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar arma por cadastrante" });
    console.error(
      chalk.bold.red("❌ Erro ao buscar arma pelo nome de quem cadastrou:\n"),
      error
    );
  }

  //POST

  // Adiciona uma nova arma
router.post("/add", async (req, res) => {

})
});

export default router;
