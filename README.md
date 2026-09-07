# Projeto Integrador — Cadastro de Automóveis

Projeto individual desenvolvido para integração entre as disciplinas de **Front-end** e **Programação Web**.

A aplicação permite cadastrar e visualizar automóveis utilizando um cliente desenvolvido em **React** integrado a uma **API REST em Java com Spring Boot e JdbcTemplate**, com persistência em banco de dados relacional.

---

## Objetivo

Desenvolver uma aplicação completa contendo:

- Front-end desenvolvido em React;
- API REST desenvolvida em Java e Spring Boot;
- Integração entre cliente e servidor;
- Persistência de dados em banco relacional;
- Validação das informações recebidas;
- Utilização dos métodos HTTP GET e POST;
- Tratamento adequado dos códigos de status HTTP.

---

## Tecnologias utilizadas

### Front-end

- React
- Vite
- JavaScript
- JSX
- CSS Modules
- Axios
- React Router

### Back-end

- Java
- Spring Boot
- JdbcTemplate
- Maven
- H2 Database

---

## Estrutura do projeto

```text
projeto-integrador/
├── README.md
│
├── front/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── projeto-automovel/
    ├── src/
    ├── pom.xml
    └── ...
```

> Os nomes das pastas podem variar conforme a organização final do repositório.

---

# Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Cadastro de automóveis;
- Listagem dos automóveis cadastrados;
- Persistência das informações no banco de dados;
- Comunicação entre React e API REST;
- Validação dos dados enviados para o servidor;
- Tratamento de carregamento e erros nas requisições.

---

# Recurso principal

O recurso principal da aplicação é **Automóvel**.

Cada automóvel possui os seguintes campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `idAutomovel` | Integer | Identificador do automóvel |
| `nomeAutomovel` | String | Nome ou modelo do veículo |
| `marcaAutomovel` | String | Marca do veículo |
| `anoAutomovel` | Integer | Ano do veículo |
| `placaAutomovel` | String | Placa do veículo |
| `tipoAutomovel` | String | Tipo do veículo |

Exemplos de tipos:

- Carro
- Moto
- Caminhão
- Ônibus
- Outro

---

# Banco de dados

O projeto utiliza um banco de dados relacional **H2**.

Exemplo da estrutura da tabela utilizada:

```sql
CREATE TABLE IF NOT EXISTS automovel (
    idAutomovel INT AUTO_INCREMENT PRIMARY KEY,
    nomeAutomovel VARCHAR(255) NOT NULL,
    marcaAutomovel VARCHAR(255) NOT NULL,
    anoAutomovel INT NOT NULL,
    placaAutomovel VARCHAR(7) NOT NULL UNIQUE,
    tipoAutomovel VARCHAR(50) NOT NULL
);
```

---

# Como executar o projeto

## 1. Executando o Back-end

Entre na pasta do projeto Spring Boot.

Exemplo:

```bash
cd projeto-automovel
```

No Windows:

```bash
mvnw.cmd spring-boot:run
```

Em Linux ou macOS:

```bash
./mvnw spring-boot:run
```

A API será executada por padrão em:

```text
http://localhost:8080
```

---

## 2. Executando o Front-end

Entre na pasta do cliente:

```bash
cd front
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

O Vite normalmente disponibilizará a aplicação em:

```text
http://localhost:5173
```

---

# Integração entre Front-end e Back-end

O cliente React utiliza a API disponível em:

```text
http://localhost:8080
```

Exemplo de configuração do Axios:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export default api;
```

Caso Front-end e Back-end sejam executados em origens diferentes, o Back-end deve permitir o acesso através de CORS.

Exemplo:

```java
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/automoveis")
public class AutomovelController {
}
```

---

# Contrato da API

## Listar automóveis

### Endpoint

```http
GET /automoveis
```

### Descrição

Retorna todos os automóveis cadastrados.

### Parâmetros

Nenhum.

### Exemplo de requisição

```http
GET http://localhost:8080/automoveis
```

### Resposta de sucesso

**Status:**

```text
200 OK
```

**Exemplo:**

```json
[
  {
    "idAutomovel": 1,
    "nomeAutomovel": "Civic",
    "marcaAutomovel": "Honda",
    "anoAutomovel": 2022,
    "placaAutomovel": "ABC1D23",
    "tipoAutomovel": "Carro"
  },
  {
    "idAutomovel": 2,
    "nomeAutomovel": "CB 500",
    "marcaAutomovel": "Honda",
    "anoAutomovel": 2023,
    "placaAutomovel": "DEF4G56",
    "tipoAutomovel": "Moto"
  }
]
```

---

# Cadastrar automóvel

### Endpoint

```http
POST /automoveis
```

### Descrição

Recebe os dados de um automóvel, realiza as validações necessárias e persiste as informações no banco de dados.

### Formato da requisição

```json
{
  "nomeAutomovel": "Civic",
  "marcaAutomovel": "Honda",
  "anoAutomovel": 2022,
  "placaAutomovel": "ABC1D23",
  "tipoAutomovel": "Carro"
}
```

### Exemplo de requisição

```http
POST http://localhost:8080/automoveis
Content-Type: application/json
```

```json
{
  "nomeAutomovel": "Civic",
  "marcaAutomovel": "Honda",
  "anoAutomovel": 2022,
  "placaAutomovel": "ABC1D23",
  "tipoAutomovel": "Carro"
}
```

### Resposta de sucesso

**Status:**

```text
201 Created
```

**Exemplo:**

```json
{
  "nomeAutomovel": "Civic",
  "marcaAutomovel": "Honda",
  "anoAutomovel": 2022,
  "placaAutomovel": "ABC1D23",
  "tipoAutomovel": "Carro"
}
```

---

# Validações e regras de negócio

Antes de persistir um automóvel, o Back-end deve validar os dados recebidos.

Exemplos de regras utilizadas:

- Nome do automóvel é obrigatório;
- Marca do automóvel é obrigatória;
- Ano deve possuir um valor válido;
- Placa é obrigatória;
- Placa não pode estar duplicada;
- Tipo do automóvel é obrigatório;
- O tipo deve corresponder a uma opção permitida pela aplicação.

Uma requisição inválida deve ser recusada mesmo quando enviada diretamente por ferramentas como:

- Postman;
- Insomnia;
- curl.

---

# Exemplo de erro de validação

### Requisição

```json
{
  "nomeAutomovel": "",
  "marcaAutomovel": "Honda",
  "anoAutomovel": 2022,
  "placaAutomovel": "",
  "tipoAutomovel": "Carro"
}
```

### Resposta

```text
400 Bad Request
```

Exemplo de mensagem:

```text
Nome do automóvel é obrigatório.
```

---

# Códigos HTTP

A API utiliza códigos HTTP compatíveis com o resultado das operações.

| Código | Significado | Utilização |
|---|---|---|
| `200 OK` | Requisição realizada com sucesso | Consultas GET |
| `201 Created` | Recurso criado com sucesso | Cadastro de automóvel |
| `400 Bad Request` | Dados inválidos | Erro de validação |
| `404 Not Found` | Recurso não encontrado | Consulta por recurso inexistente |
| `204 No Content` | Operação concluída sem conteúdo de retorno | Atualizações ou remoções, quando aplicável |

---

# Exemplo de consumo no React

## GET

```javascript
const buscarAutomoveis = async () => {
    try {
        const resposta = await api.get("/automoveis");
        setAutomoveis(resposta.data);
    } catch (erro) {
        console.error("Erro ao buscar automóveis:", erro);
    }
};
```

---

## POST

```javascript
const cadastrarAutomovel = async () => {
    const automovel = {
        nomeAutomovel,
        marcaAutomovel,
        anoAutomovel,
        placaAutomovel,
        tipoAutomovel
    };

    try {
        await api.post("/automoveis", automovel);
        navigate("/");
    } catch (erro) {
        console.error("Erro ao cadastrar automóvel:", erro);
    }
};
```

---

# Front-end

O Front-end foi desenvolvido utilizando React e atende aos requisitos de:

- JSX;
- Componentização;
- Estados com `useState`;
- Requisições à API;
- GET;
- POST;
- CSS Modules;
- Tratamento de carregamento;
- Tratamento de sucesso;
- Tratamento de erro.

O formulário possui pelo menos cinco campos relacionados ao recurso principal.

---

# Fluxo da aplicação

```text
Usuário
   ↓
Interface React
   ↓
Requisição HTTP
   ↓
API Spring Boot
   ↓
Validação
   ↓
JdbcTemplate
   ↓
Banco H2
```

Na consulta:

```text
Banco H2
   ↓
JdbcTemplate
   ↓
API Spring Boot
   ↓
JSON
   ↓
React
   ↓
Usuário
```

---

# Testes da API

A API pode ser testada utilizando ferramentas como:

- Postman;
- Insomnia;
- curl.

## Exemplo utilizando curl

### GET

```bash
curl http://localhost:8080/automoveis
```

### POST

```bash
curl -X POST http://localhost:8080/automoveis ^
-H "Content-Type: application/json" ^
-d "{\"nomeAutomovel\":\"Civic\",\"marcaAutomovel\":\"Honda\",\"anoAutomovel\":2022,\"placaAutomovel\":\"ABC1D23\",\"tipoAutomovel\":\"Carro\"}"
```

---

# Autor

Projeto desenvolvido individualmente como atividade integradora das disciplinas de **Front-end** e **Programação Web**.
