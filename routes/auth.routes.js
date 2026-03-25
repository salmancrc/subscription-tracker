import { Router } from "express";
import { signIn, signOut, signUp } from "../config/controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => res.send({ title: 'Sign Up',  signUp}));
authRouter.post('/sign-in', (req, res) => res.send({ title: 'Sign In', signIn }));
authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign Out', signOut }));

export default authRouter;