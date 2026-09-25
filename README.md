# ⚽ Champions League Players & Clubs API

Uma API REST desenvolvida em Node.js e TypeScript para gerenciamento e consulta de dados sobre jogadores de futebol e clubes da UEFA Champions League.

---

## 📌 Sobre o Projeto

O projeto oferece endpoints para listar, buscar e cadastrar jogadores com suas respectivas estatísticas de atributos (overall, velocidade, finalização, passe, drible, defesa e físico), além de listar clubes participantes.

### 🧰 Tecnologias Utilizadas

* **Runtime:** Node.js
* **Linguagem:** TypeScript
* **Arquitetura:** Layered Architecture (Controller -> Service -> Repository)
* **Segurança:** CORS (Cross-Origin Resource Sharing)
* **Formato de Dados:** JSON / ES Modules (`import * as`)

---

## 📁 Estrutura do Projeto

```text
src/
├── controllers/       # Manipulação de requisições e respostas HTTP
├── services/          # Regras de negócio da aplicação
├── repositories/      # Acesso e manipulação das fontes de dados
├── data/              # Arquivos JSON de dados estáticos/mock (clubs.json)
├── models/            # Interfaces e definições de tipos TypeScript
└── utils/             # Helpers e utilitários (http-helper, cors, etc.)
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* **Node.js** (versão 18 ou superior)
* Gerenciador de pacotes **npm** ou **yarn**

### Passo a passo

1. **Clone o repositório:**
```bash
git clone [https://github.com/JonathanBaliellas/dio-champions-league.git](https://github.com/JonathanBaliellas/dio-champions-league.git)
cd seu-repositorio
```


2. **Instale as dependências:**
```bash
npm install
```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```



---

## 🔌 Endpoints da API

### 👤 Jogadores (`/players`)

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/players` | Retorna a lista de todos os jogadores |
| `GET` | `/api/players/:id` | Retorna os detalhes de um jogador específico por ID |
| `POST` | `/api/players` | Cadastra um novo jogador |

#### 📝 Exemplo de Body para criação de Jogador (`POST /api/players`):

```json
{
  "name": "Jontz",
  "club": "Valença FC",
  "nationality": "Brasil",
  "position": "Meio-campista",
  "statistics": {
    "overall": 88,
    "pace": 84,
    "shooting": 82,
    "passing": 91,
    "dribbling": 89,
    "defending": 68,
    "physical": 76
  }
}
```

---

### 🛡️ Clubes (`/clubs`)

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/clubs` | Retorna a lista de clubes da Champions League |

---

## 🔒 Configuração de CORS

A API está configurada para permitir requisições de qualquer origem e método HTTP.
