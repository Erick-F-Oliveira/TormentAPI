import express from 'express';
import isAuthenticated from '../middlewares/passport.js';
import { getUserInfo } from '../controllers/user.controller.js';

const router = express.Router();

router.use(isAuthenticated);

router.get('/', getUserInfo);

export default router;