describe('programs link to animals list', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/programs')
      cy.contains('See Available Animals').click()
      cy.url().should('include', '/animals')
    })
})

describe('programs link to golden tails', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/programs')
      cy.contains('Learn More').click()
      cy.url().should('include', '/goldenTails')
    })
})