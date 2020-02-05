describe('vet link to vet website', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/vets')
      cy.contains('Toowong').eq(0).click()
    })
})