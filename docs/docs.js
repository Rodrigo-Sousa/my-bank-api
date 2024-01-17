export const swaggerDocument =
{
    "swagger": "2.0",
    "info": {
        "title": "Descrição de como utilizar a API my-bank-api",
        "description": "Desenvolvido uma API, que simula alguma das funções de uma conta bancária, como a criação de uma conta, com o nome, saldo e o id. Sendo possível realizar a atualização do saldo (deposito, débito), atualização do nome do cliente e exclusão da conta.",
        "version": "1.0.0"
    },
    "host": "localhost:3000",
    "tags": [
        {
            "name": "account",
            "description": "Administração da conta dos clientes"
        }
    ],
    "paths": {
        "/account": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "Listando todos as contas",
                "description": "Exibindo todas as contas que está cadastradas no sistema.",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Operação realizada com sucesso",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Account"
                            }
                        }
                    },
                    "400": {
                        "description": "Ocorreu um erro"
                    }
                }
            },
            "post": {
                "tags": [
                    "account"
                ],
                "summary": "Cadastrando uma nova conta",
                "description": "Cadastrando uma nova conta, sendo necessário informar os parâmetros obrigatórios, para ser cadastrado a nova conta.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Account object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Account"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Conta cadastrada com sucesso."
                    },
                    "400": {
                        "description": "Ocorreu um erro"
                    }
                }
            },
            "put": {
                "tags": [
                    "account"
                ],
                "summary": "Atualizar todos os registros informado",
                "description": "Atualizar os dados completos do registro informado.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "id": "body",
                        "name": "body",
                        "description": "Dados da conta, atualizados",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PutAccount"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Dados atualizados"
                    },
                    "400": {
                        "description": "Ocorreu um erro"
                    }
                }
            },
        },
        "/account/updateBalance": {
            "patch": {
                "tags": [
                    "account"
                ],
                "summary": "Atualizado o saldo da conta.",
                "description": "Atualizando o saldo da conta, podendo ser um 'deposito' ou 'debito'",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "id": "body",
                        "name": "body",
                        "description": "Account object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PatchAccount"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Saldo atualizado com sucesso"
                    },
                    "400": {
                        "description": "Ocorreu um erro"
                    }
                }
            }
        },
        "/account/{id}": {
            "delete": {
                "tags": [
                    "account"
                ],
                "summary": "Excluindo um registro",
                "description": "Excluir um registro permanentemente, do arquivo/sistema.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "description": "Excluir um registro do cliente, ao passar o id desejado.",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Delete"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Contado apagada com sucesso."
                    },
                    "400": {
                        "description": "Ocorreu um erro"
                    }
                }
            }
        }
    },
    "definitions": {
        "Account": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "example": "Rodrigo Sousa"
                },
                "balance": {
                    "type": "number",
                    "example": 300
                }
            }
        },
        "PutAccount": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "example": 1
                },
                "name": {
                    "type": "string",
                    "example": "Rodrigo da Silva Sousa"
                },
                "balance": {
                    "type": "number",
                    "example": 1300
                }
            }
        },
        "PatchAccount2": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "example": 1
                },
                "balance": {
                    "type": "number",
                    "example": 1300
                }
            }
        },
        "PatchAccount": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "example": 1
                },
                "balance": {
                    "type": "number",
                    "example": 4300
                }
            }
        },
        "Delete": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int64"
                }
            }
        }
    }
};