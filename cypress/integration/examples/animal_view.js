describe('Animals display', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
        cy.visit('http://localhost:3000/animals')
        cy.contains('Budweiser').click()
        cy.contains('Animal Type:')
        cy.contains('Adoption Application').click()
        cy.url().should('include', '/commands/actions')
    })
  })

