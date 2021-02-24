import "reflect-metadata";
import express from "express";
import "./database"; //não precisa passar o index;
import { router } from "./routers";

const app = express();

app.use(express.json());
app.use( router );

app.listen(3333, () => console.log("Server is running"));


