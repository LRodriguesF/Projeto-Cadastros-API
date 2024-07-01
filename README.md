# Projeto API Cadastros

Este projeto utiliza Cypress para testar uma API REST simulada fornecida por JSONPlaceholder.

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rodando os Testes](#rodando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## **Introdução**

Este projeto demonstra como utilizar o Cypress para testar operações CRUD em uma API REST. Usamos o JSONPlaceholder como uma API pública para simular as requisições.

## **Pré-requisitos**

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

## **Instalação**

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/projeto-api-cadastros.git
cd projeto-api-cadastros
Configuração
Configure o projeto antes de executar os testes:

# Instale as dependências
npm install
Rodando os Testes
Para executar os testes com Cypress:

# Abra o Cypress para rodar os testes interativamente
npx cypress open

# Ou execute os testes em modo headless (sem interface gráfica)
npx cypress run
Estrutura do Projeto
A estrutura do projeto segue o padrão Cypress:

cypress/
  ├── fixtures/           # Dados estáticos para testes
  ├── integration/        # Casos de teste escritos com Cypress
  ├── plugins/            # Plugins do Cypress (opcional)
  ├── support/            # Arquivos de suporte e configuração (opcional)
  └── ...
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
