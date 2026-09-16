# Casos de Testes da API

Documentação dos casos de teste elaborados para validação da API do **Shopping do QA**.

## Objetivo

Validar os principais comportamentos da API, verificando respostas, regras de negócio, dados enviados e possíveis cenários de erro.

## Escopo

Os testes contemplam principalmente a funcionalidade de usuários:

* Cadastro de usuário
* Consulta de usuários
* Validação de dados enviados
* Tratamento de respostas HTTP
* Cenários positivos e negativos

## Casos de Teste

Os casos de teste foram organizados em uma planilha contendo:

* ID do caso de teste
* Endpoint
* Método HTTP
* Cenário
* Dados de entrada
* Resultado esperado
* Resultado obtido
* Status
* Evidências/observações

### Planilha de Casos de Teste

[📊 Acessar planilha de casos de teste da API](https://docs.google.com/spreadsheets/d/1RoAcuGNe67FtyEYXQ7tEQmLjRwvFTssMM91xYoWo6BU/edit?usp=sharing)

## Tecnologias utilizadas

* Postman
* REST API
* HTTP/JSON
* Jest
* Supertest
* Node.js
* Supabase
* GitHub Actions

## Automação

Além dos testes manuais realizados no Postman, parte dos cenários da API foi automatizada utilizando **Jest + Supertest**.

Os testes automatizados são executados através do **GitHub Actions**, permitindo validar a API automaticamente durante o processo de desenvolvimento.

## Objetivo de QA

A documentação busca demonstrar o processo de análise e validação da API, desde a definição dos cenários e casos de teste até a execução, registro dos resultados e automação dos testes.
