import AuthController from "./controllers/auth"
import express from 'express';
import bodyParser from 'body-parser'
import mongoose from "./db";

const app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), AuthController);


app.listen(3000, () => console.log("Server running on port 3000."));
