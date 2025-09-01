import { Router } from 'express';
import weapon from "./src/routes/weapon.route.js";
import book from "./src/routes/book.route.js";
import test from "./src/routes/test.route.js";
import auth from "./src/routes/auth.route.js";
const router = Router();

// Rotas de teste
router.use("/test", test); 
// Rotas de armas
router.use("/weapon", weapon);
// Rotas de livros
router.use("/book", book);
// Rotas de autenticação
router.use("/auth", auth);


// Se não achou rota no router
router.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada dentro do Router" });
});

export default router;
