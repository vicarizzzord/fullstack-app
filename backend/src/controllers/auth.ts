import { Router, Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const AuthController = Router();

function createToken(params = {}) {
    return jwt.sign(params, process.env.JWT_KEY, {
        expiresIn: 86400,
    })
}

AuthController.post('/signup', async (req: Request, res: Response) => {
    try {
        const { username } = req.body;

        if (await User.findOne({ username }))
            return res.status(400).send({ error: "Usuário ja existente." });


        const newUser = await User.create(req.body);
        return res.status(201).send({ newUser, token: createToken({ id: newUser.id }) })

    } catch (error) {
        return res.status(400).send({ error: "Falha no cadastro: " + error.message })
    }
})

AuthController.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username }).select('+password')

        if (!user)
            return res.status(404).send({ error: "Usuário não encontrado." })

        if (!await bcrypt.compare(password, user.password))
            return res.status(403).send({ error: "Dados incorretos." })

        user.password = undefined;


        res.send({
            user,
            token: createToken({ id: user.id })
        })

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

export default AuthController