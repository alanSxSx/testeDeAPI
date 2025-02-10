# Relatório de Testes da API

Introdução

- Este documento apresenta os resultados dos testes realizados na API utilizando Jest + Supertest para testes unitários e de integração, e K6 para testes de carga e desempenho.

Testes com Jest + Supertest

- Teste: Retornar a lista de usuários

Endpoint: GET /users

- Resultado Esperado: Deve retornar um array de usuários cadastrados.

- Resultado Obtido: Status: 200 OK

Retorno: Array de usuários contendo id, name e email.

Status: ✅ Passou

- Teste: Criar um novo usuário

Endpoint: POST /users

Dados Enviados:

{
  "name": "Teste Usuário",
  "email": "<teste@email.com>",
  "phone": "123456789"
}

- Resultado Esperado: Usuário criado com status 201 Created.

- Resultado Obtido: Status: 201 Created

Retorno: JSON contendo id, name, email.

Status: ✅ Passou

- Teste: Criar um usuário sem nome (Erro 400)

Endpoint: POST /users

Dados Enviados:

{
  "email": "<teste@email.com>"
}

- Resultado Esperado: Retornar erro 400 Bad Request.

- Resultado Obtido: Status: 400 Bad Request

Status: ✅ Passou

- Teste: Simular erro 500 no servidor

Endpoint: GET /error

- Resultado Esperado: Retornar erro 500 Internal Server Error.

- Resultado Obtido: Status: 500 Internal Server Error

Status: ✅ Passou

Testes de Carga com K6

Configuração do Teste

Carga simulada:

100 usuários simultâneos por 5 segundos

Mantendo 100 usuários por 10 segundos

Reduzindo para 0 usuários em 5 segundos

Métricas e Resultados

1. Tempo de resposta médio: 150ms

2. Tempo de resposta máximo: 950ms

3. Requisiões por segundo (RPS): ~500

4. Sucesso das requisições: ✅ 100%

5. Requisições falhas: ❌ 0%

Execução do Reset da API

Endpoint: POST /reset

- Resultado: API resetada com sucesso após os testes.

Status: ✅ Passou

Conclusão

Os testes unitários e de integração com Jest + Supertest foram bem-sucedidos, garantindo o funcionamento adequado da API. Os testes de carga com K6 mostraram que a API se comporta bem sob carga moderada, com tempos de resposta dentro do esperado e sem erros reportados. A função de reset foi eficaz na limpeza dos dados após os testes.

Status Geral: ✅ Testes aprovados com sucesso! 🎯
