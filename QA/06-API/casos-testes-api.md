# Casos de Teste de API — Shopping do QA

## Ambiente

**Base URL:** `http://localhost:3000`

---

## CT-API-001 — GET / — API disponível

**Método:** GET

**Endpoint:**

`http://localhost:3000/`

**Pré-condição:**
API local em execução.

**Passos:**

1. Abrir o Postman.
2. Criar uma requisição GET.
3. Informar a URL `http://localhost:3000/`.
4. Enviar a requisição.

**Resultado esperado:**

* Status HTTP: `200 OK`
* Corpo da resposta deve informar que a API está funcionando.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-002 — GET /usuarios — listar usuários

**Método:** GET

**Endpoint:**

`http://localhost:3000/usuarios`

**Pré-condição:**
API em execução.

**Passos:**

1. Criar uma requisição GET.
2. Informar `/usuarios`.
3. Enviar a requisição.

**Resultado esperado:**

* Status HTTP: `200 OK`
* Resposta em JSON.
* Retorno contendo a lista de usuários.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-003 — GET /usuarios — validar campos

**Método:** GET

**Endpoint:**

`http://localhost:3000/usuarios`

**Passos:**

1. Enviar requisição GET.
2. Analisar o JSON retornado.
3. Verificar os campos dos usuários.

**Resultado esperado:**

Cada usuário deve possuir:

```text
id
nome
sobrenome
email
data_de_nascimento
```

O campo `senha` não deve estar presente na resposta.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-004 — POST /usuarios — cadastro válido

**Método:** POST

**Endpoint:**

`http://localhost:3000/usuarios`

**Headers:**

```text
Content-Type: application/json
```

**Body:**

```json
{
  "nome": "Lucas",
  "sobrenome": "Teste API",
  "email": "lucas.api.teste.001@example.com",
  "data_de_nascimento": "1996-09-07",
  "senha": "Teste@123"
}
```

**Passos:**

1. Criar requisição POST.
2. Informar `/usuarios`.
3. Adicionar o header `Content-Type: application/json`.
4. Inserir o JSON no Body.
5. Enviar a requisição.

**Resultado esperado:**

* Usuário deve ser criado.
* API deve retornar status de sucesso de criação, conforme implementação atual.
* Resposta deve confirmar o cadastro ou retornar os dados do registro criado.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-005 — POST /usuarios — nome ausente

**Método:** POST

**Body:**

```json
{
  "sobrenome": "Teste API",
  "email": "lucas.api.teste.002@example.com",
  "data_de_nascimento": "1996-09-07",
  "senha": "Teste@123"
}
```

**Resultado esperado:**

A API deve rejeitar a requisição caso `nome` seja obrigatório.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-006 — POST /usuarios — e-mail ausente

**Método:** POST

**Body:**

```json
{
  "nome": "Lucas",
  "sobrenome": "Teste API",
  "data_de_nascimento": "1996-09-07",
  "senha": "Teste@123"
}
```

**Resultado esperado:**

A API deve rejeitar a requisição caso `email` seja obrigatório.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-007 — POST /usuarios — senha ausente

**Método:** POST

**Body:**

```json
{
  "nome": "Lucas",
  "sobrenome": "Teste API",
  "email": "lucas.api.teste.003@example.com",
  "data_de_nascimento": "1996-09-07"
}
```

**Resultado esperado:**

A API deve rejeitar a requisição caso `senha` seja obrigatória.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-008 — POST /usuarios — e-mail inválido

**Método:** POST

**Body:**

```json
{
  "nome": "Lucas",
  "sobrenome": "Teste API",
  "email": "email-invalido",
  "data_de_nascimento": "1996-09-07",
  "senha": "Teste@123"
}
```

**Resultado esperado:**

A API deve rejeitar o cadastro caso exista validação de formato de e-mail.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-009 — POST /usuarios — e-mail duplicado

**Método:** POST

**Body:**

Utilizar exatamente o mesmo e-mail de um usuário que já existe.

```json
{
  "nome": "Lucas",
  "sobrenome": "Teste Duplicado",
  "email": "lucas.api.teste.001@example.com",
  "data_de_nascimento": "1996-09-07",
  "senha": "Teste@123"
}
```

**Resultado esperado:**

A API deve impedir o cadastro caso exista uma restrição de unicidade para o e-mail.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-010 — POST + GET — persistência

**Passos:**

1. Criar um usuário através do `POST /usuarios`.
2. Confirmar o sucesso da criação.
3. Executar `GET /usuarios`.
4. Procurar o usuário criado.

**Resultado esperado:**

O usuário criado através do POST deve estar presente na resposta do GET.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-011 — método HTTP não suportado

**Método:** utilizar um método não implementado na rota.

**Exemplo:**

```text
DELETE http://localhost:3000/usuarios
```

**Resultado esperado:**

A API deve retornar um status HTTP indicando que a operação não é suportada pela rota.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

## CT-API-012 — regressão

**Passos:**

Executar novamente:

* GET `/`
* GET `/usuarios`
* POST `/usuarios`

**Resultado esperado:**

Os endpoints devem continuar funcionando após alterações realizadas na aplicação.

**Resultado obtido:**
A preencher durante a execução.

**Status:**
A executar.

---

# Resumo dos casos

| ID         | Método     | Endpoint    | Tipo       |
| ---------- | ---------- | ----------- | ---------- |
| CT-API-001 | GET        | `/`         | Positivo   |
| CT-API-002 | GET        | `/usuarios` | Positivo   |
| CT-API-003 | GET        | `/usuarios` | Validação  |
| CT-API-004 | POST       | `/usuarios` | Positivo   |
| CT-API-005 | POST       | `/usuarios` | Negativo   |
| CT-API-006 | POST       | `/usuarios` | Negativo   |
| CT-API-007 | POST       | `/usuarios` | Negativo   |
| CT-API-008 | POST       | `/usuarios` | Negativo   |
| CT-API-009 | POST       | `/usuarios` | Negativo   |
| CT-API-010 | POST + GET | `/usuarios` | Integração |
| CT-API-011 | DELETE     | `/usuarios` | Negativo   |
| CT-API-012 | GET + POST | Vários      | Regressão  |
