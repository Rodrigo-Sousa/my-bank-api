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
        const data = JSON.parse(await readFile(global.fileName));
        // Convertendo o conteúdo JSON.

        // Campo id. Passando o id incrementado
        account = { id: data.nextId++, ...account };

        // Incluindo a nova conta, no array
        data.accounts.push(account);

        // Devolvendo o dado modificado para o arquivo global.fileName. Podemos passar como parâmetros no stringify, se desejamos espaços, deixaremos em null e com o 2, para manter o arquivo formatado accounts.jso
        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        // Devolvendo o objeto cadastrado, para o usuário
        res.send(account);
        // res.end();

    } catch (err) {

        // Respondendo com status e mensagem de erro
        res.status(400).send({ error: err.message });
    }
});

// Método GET, retornando os usuários, mas sem o id

router.get("/", async (req, res) => {

    try {

        const data = JSON.parse(await readFile(global.fileName));
        // Antes de devolver ao usuário as informações da leitura do accounts.json, deletar para ele o id dos colaboradores.
        delete data.nextId;
        res.send(data);

    } catch (err) {
        // Respondendo com status e mensagem de erro
        res.status(400).send({ error: err.message });
    }

});

// GET filtrando por ID

router.get("/:id", async (req, res) => {

    try {

        const data = JSON.parse(await readFile(global.fileName));

        // Buscando dentro da variável data. o id passado na requisição. Pegando o id, que venho pela requisição
        const accountFind = data.accounts.find(account => account.id === parseInt(req.params.id));

        res.send(accountFind);

    } catch (err) {
        // Respondendo com status e mensagem de erro
        res.status(400).send({ error: err.message });

    }

});

// Método delete, para realizarmos exclusão de registros.

router.delete("/:id", async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));

        // No data.accounts, ele irá receber o filtro, dos id's, que são diferentes do que o passado por parâmetro. Filtrando o id passado, no arquivo .json. Só retornando, quando a condição for verdadeira
        data.accounts = data.accounts.filter(account => account.id !== parseInt(req.params.id));

        // Escrevendo no arquivo com a remoção dos dados passados pelo id, mantendo o nosso arquivo .json identado
        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.end();
    } catch (err) {

        res.status(400).send({ error: err.message });

    }

});

// Atualização integral de todos os dados do arquivo .json
router.put("/", async (req, res) => {
    try {

        const account = req.body;
        const data = JSON.parse(await readFile(global.fileName));

        // Filtrar a posição que o dados que vamos atualizar está
        const index = data.accounts.findIndex(accountFind => accountFind.id === parseInt(account.id));

        data.accounts[index] = account;

        // Substituindo no nosso arquivo os dados passados, na mesma posição que o arquivo desejado
        await writeFile(global.fileName, JSON.stringify(data));

        // Devolvendo os dados já alterados.
        res.send(account);

    } catch (err) {

    }
});

// Atualizações parciais dos dados
router.patch("/updateBalance", async (req, res) => {
    try {

        const account = req.body;
        const data = JSON.parse(await readFile(global.fileName));

        // Filtrar a posição que o dados que vamos atualizar está
        const index = data.accounts.findIndex(accountFind => accountFind.id === parseInt(account.id));

        // Atualizando apenas o conteúdo balance
        data.accounts[index].balance = account.balance;

        // Substituindo no nosso arquivo os dados passados, na mesma posição que o arquivo desejado
        await writeFile(global.fileName, JSON.stringify(data));

        // Devolvendo os dados já alterados.
        res.send(data.accounts[index]);

    } catch (err) {

    }
});

// Exportando esta rota, para utilizarmos em outros arquivos
export default router;