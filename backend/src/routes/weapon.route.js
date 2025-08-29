import express from "express";
import * as chalk from "chalk";
import Weapon from "../models/Weapon.js";
import logger from "../utils/logger.js";
import {
  createWeapon,
  getAllWeapons,
  getWeaoiponById,
  getWeaponByName,
  getWeaponByOperator,
} from "../controllers/weapon.controller.js";

const router = express.Router();

//GET
router.get("/weapons", getAllWeapons);
router.get("/id/:id", getWeaoiponById);
router.get("/name/:name", getWeaponByName);
router.get("/operator/:username", getWeaponByOperator);

//POST
router.post("/", createWeapon);

export default router;
