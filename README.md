<h1 align="center" > My Bank API </h1>

![Static Badge](https://img.shields.io/badge/Status-Projeto_Concluído_-green)

# Índice

- [Descrição do Projeto](#Descrição-do-Projeto)
- [Funcionalidades do projeto](#Funcionalidades-do-projeto)
- [Abrir e rodar o projeto](#Abrir-e-rodar-o-projeto)
- [Tecnologias utilizadas](#Tecnologias-utilizadas)
- [Conclusão](#conclusão)

---

# Descrição do Projeto

Desenvover uma API, simulando a aplicação de um banco. Nesta API, iremos controlar as _account's_, ou seja, as contas. As contas de usuários, possuem:

- Id: Sendo ele um identificador único.
- Name: Nome da conta (da pessoa dona daquela conta).
- Balance: O saldo atual da conta.

---

# Funcionalidades do projeto

O nosso desenvolvimento será realizado seguinte estes 3 campos. E iremos realizar as seguintes operações:

- **Criação:** Uma nova conta.
- **Depósito:** Uma atualização do saldo da conta.
- **Saque:** Sendo ele o oposto do depósito, no qual iremos atualizar o salvo, ao debitar os valores da conta.
- **Saldo:** Iremos ter verificações, para sabermos se há saldo na conta, para poder liberar o saque, etc. Verificando assim o saldo atual da conta.
- **Exclusão:** Excluir o registro, apagando o mesmo por completo.

---

# Abrir e rodar o projeto

1. Baixar o repositório.
2. Abrir ele pelo VsCode.
3. Na pasta, rodar: `npm install`
4. Rodar no terminal: `nodemon index.js `
5. Com o projeto rodando, acessar o navegador e ir na rota: `http://localhost:3000/docs/` para ler a documentação

---

# Tecnologias utilizadas

- JavaScript
- Node.JS
- Pacote Winston, para gravação de logging
- Pacote Express
- Pacote CORS
- Swagger UI Express
- Insomnia

# Conclusão

O desenvolvimento desta API, foi o primeiro projeto do curso de pós-graduação. No qual consistem em realizar as ações simulando a utilização em um sistema bancário. No qual o cliente terá a sua conta cadastrada, com o seu nome, um id que é auto incremento, com o seu saldo da conta. E dependendo da rota utilizada, é possível alterar os dados da conto. O nome do cliente, seu saldo bancário e a exclusão da conta.

Este projeto foi desenvolvido para consolidar os conhecimento adquiridos e demostar estas funcionalidades.
