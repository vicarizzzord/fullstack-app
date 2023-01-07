import { Router, Request, Response } from 'express';
import Client from '../models/client'


const ClientController = Router()

ClientController.post('/client', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;


        if (await Client.findOne({ email }))
            res.status(400).send({ error: "E-mail ja cadastrado" })

        const newClient = await Client.create(req.body)

        return res.status(200).send({ newClient })

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

ClientController.delete('/client/:email', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        if (!await Client.findOne({ email }))
            return res.status(404).send({ error: "Usuário não encontrado." })

        await Client.deleteOne({ email })

        return res.status(200).send({ message: "Usuário removido." })
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

ClientController.put('/client', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const client = await Client.findOneAndUpdate({ email }, req.body)

        return res.status(200).send({ client })

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

ClientController.get('/client/:email', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const client = await Client.findOne({ email })

        if (!client)
            res.status(404).send({ error: "Cliente não encontrado." })


        return res.status(200).send({ client })


    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

ClientController.get('/clients', async (req: Request, res: Response) => {
    try {
        const clients = await Client.find()
        return res.status(200).send(clients)

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

export default ClientController