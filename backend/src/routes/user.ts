import express from 'express';
import { signIn, signup } from '../controllers/user';

const router = express.Router()

router.post('/signin', signIn);
router.post('/signup', signup);

export default router;