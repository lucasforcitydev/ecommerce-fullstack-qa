# Testes de API — Shopping do QA

## Objetivo

Realizar testes de API da aplicação Shopping do QA, validando o funcionamento dos endpoints responsáveis pelo gerenciamento de usuários.

Os testes têm como objetivo verificar:

* Disponibilidade da API;
* Métodos HTTP;
* Status codes;
* Estrutura das respostas;
* Dados retornados;
* Cadastro de usuários;
* Validação de dados;
* Comportamentos esperados e inesperados da API.

## Tecnologias utilizadas

* Postman
* REST API
* JSON
* Node.js
* Express
* Supabase
* PostgreSQL

## Endpoints testados

| Método | Endpoint    | Objetivo                       |
| ------ | ----------- | ------------------------------ |
| GET    | `/`         | Validar disponibilidade da API |
| GET    | `/usuarios` | Consultar usuários             |
| POST   | `/usuarios` | Cadastrar novo usuário         |

## Ambiente

API local:

`http://localhost:3000`

## Estratégia de testes

Os testes foram elaborados considerando:

* Cenários positivos;
* Cenários negativos;
* Validação de status HTTP;
* Validação do corpo da resposta;
* Validação dos dados enviados;
* Validação dos dados retornados;
* Testes de entrada inválida;
* Regressão dos endpoints após alterações.

## Resultado

Os resultados dos testes são registrados nos casos de teste da pasta `06-TESTES-API`.

Evidências de execução podem ser adicionadas posteriormente à pasta:

`QA/05-evidencias/`
