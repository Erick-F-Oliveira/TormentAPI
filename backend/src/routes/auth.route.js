import express from "express";
import passport from "passport";

const router = express.Router();

// Rota de login que inicia o processo de autenticação com o Discord
router.get("/discord/login", passport.authenticate("discord"));

// Rota de callback que o Discord usa para enviar a resposta
router.get(
  "/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "/login-falhou", // Rota em caso de falha
    successRedirect: "http://localhost:5174/dashboard" // Rota em caso de sucesso
  })
);

export default router;
