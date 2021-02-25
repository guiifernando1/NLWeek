import "reflect-metadata";
import express from "express";
import createConnection from "./database";
//import "./database"; //não precisa passar o index;
import { router } from "./routers";

createConnection();
const app = express();

app.use(express.json());
app.use( router );


export { app }


