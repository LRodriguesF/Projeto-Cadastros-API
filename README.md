# Projeto API Cadastros 

Este projeto utiliza Cypress para testar uma API REST simulada fornecida por JSONPlaceholder.

# Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rodando os Testes](#rodando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

# Introdução

Este projeto demonstra como utilizar o Cypress para testar operações CRUD em uma API REST. Usamos o JSONPlaceholder como uma API pública para simular as requisições.

# Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

# Instalação

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/projeto-api-cadastros.git
cd projeto-api-cadastros#   P r o j e t o - C a d a s t r o s - A P I 
 
 #   P r o j e t o - C a d a s t r o s - A P I 

# Testes Implementados
Os testes cobrem as seguintes operações:

Criar um novo usuário:

Método: POST
Endpoint: /users
Exemplo de body:
{
  "name": "Novo Cliente",
  "username": "novocliente",
  "email": "novocliente@exemplo.com"
}
Obter um usuário criado:

Método: GET
Endpoint: /users/{id}
Valida que o usuário criado anteriormente é retornado com os dados corretos.
Atualizar um usuário:

Método: PUT
Endpoint: /users/{id}
Exemplo de body:
json
Copiar código
{
  "name": "Cliente Atualizado",
  "username": "clienteatualizado",
  "email": "clienteatualizado@exemplo.com"
}
Deletar um usuário:

Método: DELETE
Endpoint: /users/{id}
Valida que o usuário foi deletado com sucesso.
 
 
