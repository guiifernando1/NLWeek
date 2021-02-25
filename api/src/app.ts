/*
    Para controle do banco de dados será utilizado: yarn add typeorm reflect-metadata
    Caso ocorra erro de não encontre o reflect-metadata: npm install --save reflect-metadata
*/
import "reflect-metadata";
/*
    Utilizar biblioteca de tipos para o express (em desenvolvimento): yarn add @types/express -D
    Utilizar biblioteca do TypeScript para interpretar e poder compilar o JS: yarn add typescript -D
    Para iniciar a bilbioteca do TS, utilizar: yarn tsc --init
    Biblioteca TS-node-dev para converter código em tempo de execução: yarn add ts-node-dev -D
*/
import express from "express";
import createConnection from "./database";
//import "./database"; //não precisa passar o index;
import { router } from "./routers";

createConnection();
const app = express();

app.use(express.json());
app.use( router );


export { app }


