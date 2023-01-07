import * as dotenv from 'dotenv'
import AuthController from "./controllers/auth"
import ClientController from "./controllers/client"
import APIController from "./controllers/fetches"
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'


dotenv.config()
const app = express();
const PORT = process.env.APP_PORT;



app.use(
    express.json(),
    cors({
        origin: '*'
    }),
    express.urlencoded({ extended: false }),
    AuthController,
    ClientController,
    APIController
)


app.listen(PORT, () => console.log("Server running on port 3000."));
