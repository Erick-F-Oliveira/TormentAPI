import express from "express";
import isAuthenticated from "../middlewares/passport.js";
import { getDash } from "../controllers/dash.controller.js";

const router = express.Router();

router.use(isAuthenticated);

//Rota de criação de livros
router.get("/", getDash);

export default router;