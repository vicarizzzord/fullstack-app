import { Router, Request, Response } from 'express';
import User from '../models/user';

const AuthController = Router();

AuthController.post('/signup', async (req: Request, res: Response) => {
    try {
        const user = req.body;
        await User.create(req.body);
        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: "Falha no cadastro: " + error.message})
    }
})

export default AuthController