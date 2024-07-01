describe('API de Cadastros - JSONPlaceholder', () => {
    const baseUrl = Cypress.config('baseUrl');
    const existingUserId = 1; // ID de usuário existente
  
    it('Deve obter um cliente (usuário) existente', () => {
      cy.request('GET', `${baseUrl}/users/${existingUserId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', existingUserId);
      });
    });
  
    it('Deve atualizar um cliente (usuário) existente', () => {
      cy.request('PUT', `${baseUrl}/users/${existingUserId}`, {
        name: 'Cliente Atualizado',
        username: 'clienteatualizado',
        email: 'clienteatualizado@exemplo.com'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Cliente Atualizado');
      });
    });
  
    it('Deve deletar um cliente (usuário) existente', () => {
      cy.request('DELETE', `${baseUrl}/users/${existingUserId}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });