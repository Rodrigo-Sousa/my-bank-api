export const swaggerDocument =
{
    "swagger": "2.0",
    "info": {
        "title": "My Bank API description",
        "description": "API, which performs CRUD, simulating the administration of an account, to update the bank balance, the customer's name, along with the possibility of deleting the account.",
        "version": "1.0.0"
    },
    "host": "localhost:3000",
    "tags": [
        {
            "name": "account",
            "description": "Account management"
        }
    ],
    "paths": {
        "/account": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "Get existing accounts",
                "description": "Displaying accounts that are already in the file/system",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Account"
                            }
                        }
                    },
                    "400": {
                        "description": "Error occurred"
                    }
                }
            },
            "post": {
                "tags": [
                    "account"
                ],
                "summary": "Create a new account",
                "description": "Create a new account with the received parameters",
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
                        "description": "Account created"
                    },
                    "400": {
                        "description": "Error occurred"
                    }
                }
            },
            "put": {
                "tags": [
                    "account"
                ],
                "summary": "Full registry update",
                "description": "Update the data completely.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "id": "body",
                        "name": "body",
                        "description": "Account details, updated",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PutAccount"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Account created"
                    },
                    "400": {
                        "description": "Error occurred"
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
        }
    }
};