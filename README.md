# API City Manager 🏙️

> ⚠️ Developing

## Descrição

API REST que permite o cadastro de pessoas e cidades associadas as pessoas.

### Tecnologias e ferramentas 🧰

- NodeJS
- Typescript
- Express
- PostgreSQL
- TypeORM

## Como rodar a aplicação ❓

### Pré-requisitos

Para rodar a aplicação você antes precisará instalar as seguintes ferramentas:

- [NodeJS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/) (se preferir, você também pode usar o Docker para rodar uma imagem do banco)
- [Postman](https://www.postman.com) (uma recomendação para você testar as rotas)
- [VSCode](https://code.visualstudio.com/) (uma recomendação para você editar o código)
- [Git](https://git-scm.com/)

### Rodando a aplicação 💻

```bash
# Abra seu terminal e digite o seguinte comando para clonar o repositório:
$ git clone https://github.com/adson-SO/api_city_manager.git

# Acesse a pasta do projeto pelo VSCode

# Instale as dependências do projeto digitando o seguinte comando no terminal:
npm install

# Rode as migrations da aplicação digitando o seguinte comando no terminal:
npm run typeorm migration:run -- -d ormconfig.ts

# Execute a aplicação com o comando: 
npm run dev
```

### Testando os endpoints 👨‍💻

Você pode testar os endpoints através do Postman.

### Endpoint para cadastrar uma cidade:
> POST - `http://localhost:3000/api/v1/city`

Exemplo de payload:

```json
{
    "name": "Recife",
    "estate": "Pernambuco"
}
```

Exemplo de resposta:

```json
{
    "id": "5d6f081e-f536-496c-9032-81660a787028",
    "name": "Recife",
    "estate": "Pernambuco"
}
```

### Endpoint para listar todas as cidades cadastradas:
> GET - `http://localhost:3000/api/v1/city`

Exemplo de resposta:

```json
[
    {
        "id": "5d6f081e-f536-496c-9032-81660a787028",
        "name": "Recife",
        "estate": "Pernambuco"
    },
    {
        "id": "74034dfc-b945-4de2-8da8-387f072c4e79",
        "name": "São Paulo",
        "estate": "São Paulo"
    },
    {
        "id": "94798205-4ab1-42e9-80da-d5989232d0f4",
        "name": "Rio de Janeiro",
        "estate": "Rio de Janeiro"
    }
]
```

Este endpoint também permite a busca por nome e estado, através de query params. 

Exemplos de busca por query params:

```bash
http://localhost:3000/api/v1/city?name=Recife

http://localhost:3000/api/v1/city?estate=São+Paulo
```

### Endpoint para cadastrar um cliente:
> POST - `http://localhost:3000/api/v1/client`

Exemplo de payload:

```json
{
    "fullname": "Adson Sousa",
    "gender": "m",
    "birthdate": "27/03/2002",
    "age": 20,
    "city_id": "5d6f081e-f536-496c-9032-81660a787028"
}
```

Exemplo de resposta:

```json
{
    "id": "8ab611d4-2449-4594-ab52-b231e7102ba0",
    "fullname": "Adson Sousa",
    "gender": "m",
    "birthdate": "27/03/2002",
    "age": 20,
    "city_id": "5d6f081e-f536-496c-9032-81660a787028"
}
```

### Endpoint para listar todos os clientes cadastrados:
> GET - `http://localhost:3000/api/v1/client`

Exemplo de resposta:

```json
[
    {
        "id": "8ab611d4-2449-4594-ab52-b231e7102ba0",
        "fullname": "Adson Sousa",
        "gender": "m",
        "birthdate": "27/03/2002",
        "age": 20,
        "city_id": "5d6f081e-f536-496c-9032-81660a787028",
        "city": {
            "id": "5d6f081e-f536-496c-9032-81660a787028",
            "name": "Recife",
            "estate": "Pernambuco"
        }
    },
    {
        "id": "56f0843f-fa2f-4267-9546-ae7e65340f09",
        "fullname": "Maria Silva",
        "gender": "f",
        "birthdate": "01/10/2000",
        "age": 21,
        "city_id": "74034dfc-b945-4de2-8da8-387f072c4e79",
        "city": {
            "id": "74034dfc-b945-4de2-8da8-387f072c4e79",
            "name": "São Paulo",
            "estate": "São Paulo"
        }
    }
]
```

Este endpoint também permite a busca por nome, gênero, data de nascimento e idade, através de query params. 

Exemplos de busca por query params:

```bash
http://localhost:3000/api/v1/client?fullname=Adson+Sousa

http://localhost:3000/api/v1/client?gender=m

http://localhost:3000/api/v1/client?birthdate=27/03/2002

http://localhost:3000/api/v1/client?age=20
```

### Endpoint para buscar um cliente pelo id:
> GET - `http://localhost:3000/api/v1/client/:id`

Exemplo de resposta:

```json
{
    "id": "8ab611d4-2449-4594-ab52-b231e7102ba0",
    "fullname": "Adson Sousa",
    "gender": "m",
    "birthdate": "27/03/2002",
    "age": 20,
    "city_id": "5d6f081e-f536-496c-9032-81660a787028"
}
```

### Endpoint para deletar um cliente pelo id:
> DELETE - `http://localhost:3000/api/v1/client/:id`

Se a operação for bem sucedida o corpo da resposta estará vazio.

### Endpoint para alterar o nome de um cliente:
> PATCH - `http://localhost:3000/api/v1/client/:id/name`

Exemplo de payload:

```json
{
    "fullname": "José Santos"
}
```

Exemplo de resposta:

```json
{
    "id": "dd6276a6-e2f1-4b4f-b6c9-a9f2570a1e40",
    "fullname": "José Santos",
    "gender": "m",
    "birthdate": "27/03/2002",
    "age": 20,
    "city_id": "872231ad-2718-4560-9b97-d2d7141db779"
}
```

## Swagger

Para acessar o Swagger UI da aplicação, com a aplicação rodando, acesse esta url:
```
http://localhost:3000/api/v1/api-docs/
```