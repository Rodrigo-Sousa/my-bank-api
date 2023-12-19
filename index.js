// Importando o express
import express from "express";

// Importando o pacote winston, para gravação de logging's
import winston from "winston";

// Importando a rota Accounts
import acoountsRouter from "./routes/accounts.js";

// Importando a biblioteca cors
import cors from "cors";

// Importando a biblioteca swagger
import swaggerUi from "swagger-ui-express";

// Importando o arquivo swaggerDocument
import {swaggerDocument} from "./docs/docs.js";

// Importando o file system, para podermos trabalhar com a manipulação de arquivos.
import { promises as fs } from "fs";

// Deestruturando as funções de leitura e escrita do file system. Podendo utilizar cada uma das variáveis sozinhas
const { readFile, writeFile } = fs;

// Instanciando o express
const app = express();

// Variáveis globais
global.fileName = "accounts.json";

// Usando variável desestruturando
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
    // Objeto da configuração
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "my-bank-api.log" })
    ],
    format: combine(
        label({ label: "my-bank-api" }),
        timestamp(),
        myFormat
    )
});

// Solicitando ao express que utilize JSON, para as requisições que iremos utilizar.
app.use(express.json());
// Liberando todos os endpoints
app.use(cors()); 

// Informando a rota que iremos utilizar para exibir a documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Associando o nosso router a instância do Express
app.use("/account", acoountsRouter);
// Servindo arquivos estáticos, a página HTML
app.use(express.static("public"));

// Iniciando a API.
app.listen(3000, async () => {
    // Verificando se o arquivo existe
    try {
        // Realizando a leitura, como utilizamos promises, iremos usar o async await
        await readFile(global.fileName);
        // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
        logger.info("API Started!");
    } catch (err) {
        // Variável para iniciar o arquivo JSON, como uma estrutura básica
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        // Criando o arquivo. Utilizando JSON.stringify, para converter a estrutura JSON em arquivo .json
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
            logger.info("API Started and File Created!");
        }).catch(err => {
            logger.error(err);
        });
    }

});