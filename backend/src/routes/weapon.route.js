import express from "express";
import {
  createWeapon,
  getAllWeapons,
} from "../controllers/weapon.controller.js";

const router = express.Router();

//GET
router.get("/weapons", getAllWeapons);

//POST
router.post("/", createWeapon);

export default router;
