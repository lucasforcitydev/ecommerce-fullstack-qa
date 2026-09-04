# Shopping do QA — Projeto de Testes

## 1. Apresentação

O **Shopping do QA** é uma aplicação web simples desenvolvida com o objetivo de criar um ambiente controlado para **prática de testes de software**, abrangendo testes de interface, API e banco de dados.

O sistema simula funcionalidades básicas de um e-commerce, permitindo realizar cadastro de usuários, autenticação por e-mail e senha e visualização dos dados do usuário após o login.

O projeto também possui uma API própria integrada a um banco de dados PostgreSQL através do Supabase, possibilitando a execução de testes de API utilizando ferramentas como Postman.

---

## 2. Objetivo

O principal objetivo do projeto é criar uma aplicação simples, porém funcional, que permita praticar diferentes técnicas e níveis de testes.

Entre os principais objetivos estão:

* Testar funcionalidades de cadastro e login.
* Validar regras de negócio.
* Testar APIs REST.
* Validar respostas HTTP.
* Validar persistência dos dados.
* Praticar consultas SQL.
* Identificar e documentar bugs.
* Criar cenários e casos de teste.
* Preparar a aplicação para futuros testes automatizados.

---

## 3. Funcionalidades

### Cadastro de usuário

O sistema permite cadastrar usuários informando:

* Nome
* Sobrenome
* E-mail
* Data de nascimento
* Senha
* Confirmação de senha

A senha possui as seguintes regras:

* Mínimo de 8 caracteres.
* Pelo menos uma letra maiúscula.
* Pelo menos um caractere especial.
* A confirmação deve ser igual à senha.

Após o cadastro, os dados são enviados para a API e armazenados no banco de dados.

---

### Login

O usuário realiza autenticação utilizando:

* E-mail
* Senha

As credenciais são verificadas através da API e do banco de dados.

Quando as credenciais são válidas, o usuário é direcionado para a página inicial.

Quando são inválidas, o sistema apresenta uma mensagem informando que o e-mail ou senha estão incorretos.

---

### Página inicial

Após o login, a aplicação apresenta:

* Nome
* Sobrenome
* Data de nascimento
* E-mail

Também existe uma opção para encerrar a sessão.

---

## 4. Arquitetura

A aplicação possui uma arquitetura simples dividida em frontend, backend e banco de dados.

```text
Frontend
HTML + CSS + JavaScript
        │
        │ HTTP / JSON
        ▼
Backend
Node.js + Express
        │
        │ Supabase Client
        ▼
Supabase
PostgreSQL
```

---

## 5. Estrutura do projeto

```text
e-comerciSimples/
│
├── cadastro.html
├── cadastro.js
├── home.html
├── login.html
├── login.js
├── style.css
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
└── informacoes-de-usuarios/
    └── usuarios.js
```

### Frontend

**cadastro.html**

Interface responsável pelo formulário de cadastro.

**cadastro.js**

Responsável pela validação dos dados e comunicação com a API através de `fetch()`.

**login.html**

Interface de autenticação do usuário.

**login.js**

Responsável pelo envio das credenciais para a API e tratamento da resposta.

**home.html**

Página apresentada após o login, contendo os dados do usuário autenticado.

**style.css**

Responsável pela estilização das páginas.

---

### Backend

**server.js**

Responsável pela criação da API utilizando Node.js e Express.

Principais responsabilidades:

* Receber requisições HTTP.
* Validar dados recebidos.
* Consultar usuários.
* Cadastrar usuários.
* Realizar autenticação.
* Comunicar-se com o Supabase.

---

### Banco de dados

O projeto utiliza o **Supabase**, com banco de dados PostgreSQL.

Tabela principal:

```text
usuarios
```

Campos utilizados:

```text
id
nome
sobrenome
email
data_de_nascimento
senha
```

O Row Level Security (RLS) também foi utilizado para controlar o acesso aos dados.

---

## 6. Tecnologias utilizadas

| Tecnologia | Utilização             |
| ---------- | ---------------------- |
| HTML5      | Estrutura das páginas  |
| CSS3       | Estilização            |
| JavaScript | Lógica do frontend     |
| Node.js    | Ambiente do backend    |
| Express    | Desenvolvimento da API |
| Supabase   | Banco de dados e API   |
| PostgreSQL | Banco de dados         |
| Git/GitHub | Versionamento          |
| Postman    | Testes de API          |
| VS Code    | Desenvolvimento        |

---

## 7. Endpoints da API

### GET /usuarios

Retorna os usuários cadastrados.

```http
GET http://localhost:3000/usuarios
```

---

### POST /usuarios

Realiza o cadastro de um novo usuário.

```http
POST http://localhost:3000/usuarios
```

Exemplo de requisição:

```json
{
    "nome": "Teste",
    "sobrenome": "QA",
    "email": "teste@qa.com",
    "data_de_nascimento": "2000-01-01",
    "senha": "Teste@123"
}
```

Resposta esperada:

```text
201 Created
```

---

### POST /login

Realiza a autenticação do usuário.

```http
POST http://localhost:3000/login
```

Exemplo:

```json
{
    "email": "lucas@teste.com",
    "senha": "123456"
}
```

Resposta esperada para credenciais válidas:

```text
200 OK
```

---

## 8. Testes que podem ser realizados

### Testes funcionais

* Cadastro com dados válidos.
* Cadastro com campos obrigatórios vazios.
* Cadastro com e-mail duplicado.
* Login com credenciais válidas.
* Login com senha incorreta.
* Login com e-mail inexistente.
* Confirmação de senha diferente.
* Validação de senha.
* Logout.
* Redirecionamento entre páginas.

### Testes de API

* Validação dos métodos HTTP.
* Validação dos status codes.
* Validação do JSON de resposta.
* Validação dos campos obrigatórios.
* Testes com dados inválidos.
* Testes de autenticação.
* Testes de duplicidade.
* Testes de tratamento de erros.

### Testes de banco de dados

* Verificar persistência dos usuários.
* Conferir os dados cadastrados.
* Validar duplicidade de e-mail.
* Consultar registros utilizando SQL.
* Validar regras de acesso através do RLS.

### Testes de interface

* Validação dos campos.
* Funcionamento dos botões.
* Mensagens de erro e sucesso.
* Navegação entre páginas.
* Responsividade.
* Comportamento após login e logout.

---

## 9. Exemplo de cenário de teste

**Cenário:** Validar cadastro de usuário.

**Caso de teste:** Cadastrar usuário com dados válidos.

**Pré-condição:** API e banco de dados disponíveis.

**Dados:**

```text
Nome: João
Sobrenome: Teste
E-mail: joao@teste.com
Data: 2000-01-01
Senha: Teste@123
```

**Passos:**

1. Acessar a página de cadastro.
2. Preencher os campos obrigatórios.
3. Informar uma senha válida.
4. Confirmar a senha.
5. Clicar em "Cadastrar".
6. Consultar o banco de dados.

**Resultado esperado:**

* API retorna `201 Created`.
* Sistema apresenta "Usuário cadastrado com sucesso".
* Usuário é persistido no banco de dados.

---

## 10. Problema encontrado durante o desenvolvimento

Durante a implementação do cadastro, a API inicialmente retornou:

```text
500 Internal Server Error
```

Após análise do backend, foi identificado o erro:

```text
new row violates row-level security policy for table "usuarios"
```

A causa foi uma política de **Row Level Security (RLS)** impedindo a inserção de novos registros.

Após a criação da política adequada para `INSERT`, o endpoint passou a retornar:

```text
201 Created
```

Esse processo demonstra a utilização de análise de logs, identificação de causa raiz e correção de um problema de integração entre API e banco de dados.

---

## 11. Próximas etapas

O projeto pode evoluir para uma estrutura completa de portfólio de QA:

1. Criar documentação dos casos de teste.
2. Criar uma coleção do Postman.
3. Criar testes automatizados no Postman.
4. Implementar testes de API com Jest/Supertest.
5. Criar testes E2E com Cypress ou Playwright.
6. Implementar CI utilizando GitHub Actions.
7. Criar relatórios de execução dos testes.
8. Documentar bugs encontrados.
9. Implementar testes de regressão.
10. Adicionar novos módulos do e-commerce.

---

## 12. Conclusão

O **Shopping do QA** foi desenvolvido como um ambiente de prática para testes de software, combinando uma interface web, uma API REST e um banco de dados PostgreSQL.

A aplicação permite exercitar conceitos importantes de **Quality Assurance**, como testes funcionais, testes de API, validação de regras de negócio, análise de respostas HTTP, testes de banco de dados e identificação de problemas de integração.

Por possuir frontend, backend e persistência de dados, o projeto também fornece uma base adequada para evolução para **automação de testes e integração contínua**, tornando-o um projeto relevante para demonstração prática de conhecimentos em QA.

```
```
