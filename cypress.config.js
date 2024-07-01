const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar listeners de eventos do Node aqui, se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://jsonplaceholder.typicode.com',
    supportFile: false
  }
});
