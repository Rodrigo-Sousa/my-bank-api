// Importando o express
import express from "express";

import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

// Criando o objeto para o roteador
const router = express.Router();

// Criando a rota para cadastrar um registro .POST
router.post("/", async (req, res) => {
    try {
        // Recebendo a requisição e armazenando na variável
        let account = req.body;
        // Lendo o conteúdo da variável recebido, pela request. Lendo o array das contas, e salvando ele na memória de uma variável novamente. 
        const data = JSON.parse(await readFile("accounts.json"));
        // Convertendo o conteúdo JSON.

        // Campo id. Passando o id incrementado
        account = {id: data.nextId++, ...account};

        // Incluindo a nova conta, no array
        data.accounts.push(account);

        // Devolvendo o dado modificado para o arquivo accounts.json. Podemos passar como parâmetros no stringify, se desejamos espaços, deixaremos em null e com o 2, para manter o arquivo formatado accounts.jso
        await writeFile("accounts.json", JSON.stringify(data, null, 2));
        
        // Devolvendo o objeto cadastrado, para o usuário
        res.send(account);
        // res.end();

    } catch (err) {

        // Respondendo com status e mensagem de erro
        res.status(400).send({ error: err.message });
    }
});


// Exportando esta rota, para utilizarmos em outros arquivos
export default router;