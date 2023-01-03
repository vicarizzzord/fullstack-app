import { Router, Request, Response } from 'express';
import fetch from 'node-fetch'


const APIController = Router()

APIController.get('/randomUser', async (req: Request, res: Response) => {
    const data = await fetch('https://randomuser.me/api/')
    const user = await data.json()
    return res.status(200).send({ user })
})



export default APIController