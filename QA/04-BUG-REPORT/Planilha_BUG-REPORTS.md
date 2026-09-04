# Bug Reports

Esta pasta contém os registros dos defeitos encontrados durante a execução dos testes da aplicação **Shopping do QA**.

## Objetivo

Documentar de forma clara, objetiva e reproduzível os problemas identificados durante os testes.

Cada bug possui informações suficientes para permitir sua reprodução, análise e posterior validação da correção.

## Informações registradas

Os Bug Reports possuem:

* Bug ID
* Título
* Requisito relacionado
* Caso de teste relacionado
* Data da execução
* Ambiente
* Pré-condição
* Passos para reprodução
* Resultado esperado
* Resultado obtido
* Prioridade
* Severidade
* Status
* Observações
* Evidências

## Bugs Encontrados

### BUG-001 — Sistema permite cadastro com e-mail inválido

**Requisito:** RF03
**Caso de Teste:** CT05-01
**Prioridade:** Alta
**Severidade:** Alta
**Status:** Aberto

Durante a execução do CT05-01, foi identificado que o sistema permitiu o cadastro utilizando um endereço de e-mail em formato inválido.

### Resultado esperado

O sistema deveria rejeitar o e-mail inválido e impedir a realização do cadastro.

### Resultado obtido

O sistema permitiu o cadastro e apresentou a mensagem de sucesso. O registro também foi salvo no banco de dados.

O defeito foi registrado na planilha de Bug Reports como **BUG-001**.

## Evidências

As evidências relacionadas ao defeito estão associadas ao Bug Report correspondente.

## Planilha de Bug Reports

**[Acessar Bug Reports — Google Sheets](https://docs.google.com/spreadsheets/d/1nyLZlxuWDKv6H9AjTTuWhgOklK5hdOSoXb_0eYxE180/edit?usp=sharing)**

## Fluxo do Bug

```text
Execução do Caso de Teste
          ↓
       Falha
          ↓
     BUG-001
          ↓
   Correção do Bug
          ↓
       Reteste
          ↓
  Passou ou Reaberto
```
