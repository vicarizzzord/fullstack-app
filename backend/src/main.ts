import * as dotenv from 'dotenv'
import AuthController from "./controllers/auth"
import ClientController from "./controllers/client"
import express from 'express';
import cors from 'cors'


dotenv.config()
const app = express();
const PORT = 3000;



app.use(
    express.json(),
    cors({
        origin: '*'
    }),
    express.urlencoded({ extended: false }),
    AuthController,
    ClientController
)


app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`));
