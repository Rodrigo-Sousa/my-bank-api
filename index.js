// Importando o express
import express from "express";

// Importando a rota Accounts
import acoountsRouter from "./routes/accounts.js";

// Importando o file system, para podermos trabalhar com a manipulação de arquivos.
import { promises as fs} from "fs";


// Deestruturando as funções de leitura e escrita do file system. Podendo utilizar cada uma das variáveis sozinhas
const { readFile, writeFile } = fs;

// Instanciando o express
const app = express();
// Variável global
global.fileName = "accounts.json";
// Solicitando ao express que utilize JSON, para as requisições que iremos utilizar.
app.use(express.json());

// Associando o nosso router a instância do Express
app.use("/account", acoountsRouter);

// Iniciando a API.
app.listen(3000, async ()=>{
    // Verificando se o arquivo existe
    try{
        // Realizando a leitura, como utilizamos promises, iremos usar o async await
        await readFile("accounts.json");
        // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
        console.log("API Started!");
    }catch (err){
app.listen(3000, async () => {
    // Verificando se o arquivo existe
    try {
        // Realizando a leitura, como utilizamos promises, iremos usar o async await
        await readFile(global.fileName);
        // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
        console.log("API Started!");
    } catch (err) {
        // Variável para iniciar o arquivo JSON, como uma estrutura básica
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        // Criando o arquivo. Utilizando JSON.stringify, para converter a estrutura JSON em arquivo .json
        writeFile("accounts.json", JSON.stringify(initialJson)).then(()=>{
            // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
            console.log("API Started and File Created!");
        }).catch(err =>{
            console.log(err);
        });
    }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            // Verificar se o arquivo .json que iremos armazenar os dados existe, senão criando o mesmo.
            console.log("API Started and File Created!");
        }).catch(err => {
            console.log(err);
        });
    }
});