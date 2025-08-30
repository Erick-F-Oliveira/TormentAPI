import express from "express";
import {
  createWeapon,
  getWeapons,
  editWeapon
} from "../controllers/weapon.controller.js";

const router = express.Router();

//GET
router.get("/", getWeapons);

//POST
router.post("/", createWeapon);

//PATCH
router.patch("/", editWeapon);

export default router;
