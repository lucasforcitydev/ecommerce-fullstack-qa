# Cenários de Teste de API — Shopping do QA

## API

Base URL:

`http://localhost:3000`

---

## CT-API-001 — Disponibilidade da API

**Objetivo:**
Validar se a API está disponível e respondendo às requisições.

**Endpoint:**
`GET /`

**Resultado esperado:**
A API deve retornar HTTP 200 e uma mensagem indicando que está funcionando.

---

## CT-API-002 — Consulta de usuários

**Objetivo:**
Validar a consulta dos usuários cadastrados.

**Endpoint:**
`GET /usuarios`

**Resultado esperado:**
A API deve retornar HTTP 200 e uma lista de usuários cadastrados.

---

## CT-API-003 — Estrutura dos usuários retornados

**Objetivo:**
Validar se os usuários retornados possuem os campos esperados.

**Endpoint:**
`GET /usuarios`

**Resultado esperado:**
Cada usuário deve apresentar os campos:

* id
* nome
* sobrenome
* email
* data_de_nascimento

A senha não deve ser retornada na consulta.

---

## CT-API-004 — Cadastro de usuário válido

**Objetivo:**
Validar o cadastro de um novo usuário utilizando dados válidos.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve aceitar a requisição e cadastrar o usuário no banco de dados.

---

## CT-API-005 — Cadastro sem nome

**Objetivo:**
Validar o comportamento da API quando o campo nome não é informado.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve rejeitar a requisição caso o campo seja obrigatório.

---

## CT-API-006 — Cadastro sem e-mail

**Objetivo:**
Validar o comportamento da API quando o e-mail não é informado.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve rejeitar a requisição caso o campo seja obrigatório.

---

## CT-API-007 — Cadastro sem senha

**Objetivo:**
Validar o comportamento da API quando a senha não é informada.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve rejeitar a requisição caso o campo seja obrigatório.

---

## CT-API-008 — Cadastro com e-mail inválido

**Objetivo:**
Validar o comportamento da API ao receber um e-mail em formato inválido.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve rejeitar o dado caso exista validação de formato de e-mail implementada.

---

## CT-API-009 — Cadastro com dados duplicados

**Objetivo:**
Validar o comportamento da API ao tentar cadastrar um usuário utilizando um e-mail já existente.

**Endpoint:**
`POST /usuarios`

**Resultado esperado:**
A API deve impedir o cadastro duplicado caso o e-mail possua restrição de unicidade.

---

## CT-API-010 — Persistência do usuário

**Objetivo:**
Validar se um usuário cadastrado através da API realmente é persistido no banco de dados.

**Fluxo:**

1. Realizar `POST /usuarios`.
2. Obter a resposta da API.
3. Realizar `GET /usuarios`.
4. Localizar o usuário cadastrado.

**Resultado esperado:**
O usuário criado deve aparecer na consulta posterior.

---

## CT-API-011 — Método HTTP não permitido

**Objetivo:**
Validar o comportamento da API quando um método não implementado é utilizado.

**Resultado esperado:**
A API deve retornar um status HTTP indicando que o método não é permitido ou que a rota não possui suporte ao método utilizado.

---

## CT-API-012 — Regressão dos endpoints

**Objetivo:**
Garantir que alterações realizadas na API não quebrem funcionalidades existentes.

**Resultado esperado:**
Os endpoints anteriormente validados devem continuar apresentando o comportamento esperado.
