API para Testes com Jest, Supertest e K6

Este projeto é uma API simples construída com Express para fins de testes automatizados usando Jest + Supertest para testes unitários e K6 para testes de carga.

📌 Requisitos

Antes de começar, certifique-se de ter instalado:

Node.js

npm ou yarn

📦 Instalação

Clone o repositório:

Instale as dependências:

 - npm install

🚀 Executando a API

Para iniciar a API localmente:

  - node index.js

A API estará disponível em http://localhost:3000.

🛠 Estrutura do Projeto

/testedeapi
│── index.js        # Arquivo principal da API
│── package.json    # Configuração do projeto
│── /tests          # Testes automatizados
│   ├── api.test.js # Testes Jest + Supertest
│── /k6             # Testes de carga com K6
│   ├── test.k6.js  # Arquivo de teste de carga

✅ Testes com Jest + Supertest

Os testes unitários utilizam Jest e Supertest para validar as rotas da API.

📌 Rodando os testes DE API COM JEST + SUPERTEST

Execute:

 - npm test

⚡ Testes de Carga com K6

Os testes de carga utilizam K6 para simular múltiplos usuários acessando a API simultaneamente.

📌 Instalação do K6

ANTES DE INSTALAR O K6, É NECESSÁRIO FAZER A INSTALAÇÃO DO GERENCIADOR DE PACOTES CHOCOLATEY - https://chocolatey.org/install

APÓS A INSTALAÇÃO DO CHOCOLATEY, INSTALE O K6 - choco install k6

CASO DE DÚVIDA, ACESSE OS LINKS DISPONIBILIZADOS: https://grafana.com/docs/k6/latest/set-up/install-k6/

📌 Rodando os testes de carga

APÓS A INICIALIZAÇÃO DO SERVIDOR NODE, RODE O SEGUINTE COMANDO DENTRO DA PASTA "testeDeAPI\tests".

Execute o comando: k6 run load-test.js
