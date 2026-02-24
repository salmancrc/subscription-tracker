import { Router } from "express";

const authRouter = Router();

authRouter.post(path, '/sign-up', (req, res) => res.send(body, { title: 'Sign Up' }));
authRouter.post(path, '/sign-in', (req, res) => res.send(body, { title: 'Sign In' }));
authRouter.post(path, '/sign-out', (req, res) => res.send(body, { title: 'Sign Out' }));

export default authRouter;