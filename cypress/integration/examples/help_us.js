describe('help us link to foster', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/help')
      cy.get('Button').eq(0).click()
      cy.url().should('include', '/foster')
    })
})

describe('help us link to golden tails', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/help')
      cy.get('Button').eq(1).click()
      cy.url().should('include', '/goldenTails')
    })
})

describe('help us link to volunteer', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/help')
      cy.get('button').eq(2).click()
      cy.url().should('include', '/volunteer')
    })
})