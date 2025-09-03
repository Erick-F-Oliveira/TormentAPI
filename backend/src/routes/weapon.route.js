import express from "express";
import {
  createWeapon,
  getWeapons,
  editWeapon,
} from "../controllers/weapon.controller.js";
import isAuthenticated from "../middlewares/passport.js";

const router = express.Router();

router.use(isAuthenticated);
//GET
router.get("/", getWeapons);

//POST
router.post("/", createWeapon);

//PATCH
router.patch("/", editWeapon);

export default router;
