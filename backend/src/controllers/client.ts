import { Router, Request, Response } from "express";
import Client from "../models/client";

const ClientController = Router();

ClientController.post("/client", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (await Client.findOne({ email }))
      res.status(400).send({ error: "E-mail ja cadastrado." });

    const newClient = await Client.create(req.body);

    return res.status(200).send({ newClient });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

ClientController.delete("/client/:_id", async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const client = await Client.findById(_id);
    console.log(client)

    if (!client)
      return res.status(404).send({ error: "Cliente não encontrado." });

    await Client.deleteOne({ client });

    return res.status(200).send({ message: "Cliente removido." });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

ClientController.put("/client", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const client = await Client.findOneAndUpdate({ email });

    return res.status(200).send({ client });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

ClientController.get("/client/:name", async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const client = await Client.findOne({ name });
    console.log(name)

    if (!client)
      return res.status(404).send({ error: "Cliente não encontrado." });

    return res.status(200).send(client);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

ClientController.get("/clients", async (req: Request, res: Response) => {
  try {
    const clients = await Client.find();
    return res.status(200).send(clients);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

export default ClientController;
