import * as express from "express";
import Test from "../models/Test.js";
const router = express.Router();


router.get("/tests", async (req, res) => {
  try {
    const test = await Test.find();
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os documentos" });
  }
});

router.post("/test", async (req, res) => {
  try {
    const { name, age } = req.body;
    const newTest = new Test({ name, age });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o documento de teste" });
  }
});

export default router;
