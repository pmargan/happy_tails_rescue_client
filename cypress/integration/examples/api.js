describe('API test welcome', () => {

   beforeEach(() => {
       cy.request('http://localhost:3001/text/welcomePage').as('welcomePage');
   });

   it('Validate the header', () => {
       cy.get('@welcomePage')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code', () => {
       cy.get('@welcomePage')
           .its('status')
           .should('equal', 200);
   });

   it('Validate the source for welcomePage', () => {
       cy.get('@welcomePage')
           .its('body')
           .should('include', { id: 'welcomePage' });
   });
});

describe('API test animals', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/animals').as('animals');
    });
 
    it('Validate the header', () => {
        cy.get('@animals')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@animals')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for animals', () => {
        cy.get('@animals')
            .its('body')
    });
 });

 describe('API test contactPage', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/contactPage').as('contactPage');
    });
 
    it('Validate the header', () => {
        cy.get('@contactPage')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@contactPage')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for contactPage', () => {
        cy.get('@contactPage')
            .its('body')
            .should('include', { id: 'contactPage' });
    });
 });

 describe('API test communityPrograms', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/communityPrograms').as('communityPrograms');
    });
 
    it('Validate the header', () => {
        cy.get('@communityPrograms')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@communityPrograms')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for communityPrograms', () => {
        cy.get('@communityPrograms')
            .its('body')
            .should('include', { id: 'communityPrograms' });
    });
 });

 describe('API test goldenTails', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/goldenTails').as('goldenTails');
    });
 
    it('Validate the header', () => {
        cy.get('@goldenTails')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@goldenTails')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for goldenTails', () => {
        cy.get('@goldenTails')
            .its('body')
            .should('include', { id: 'goldenTails' });
    });
 });

 describe('API test foster', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/foster').as('foster');
    });
 
    it('Validate the header', () => {
        cy.get('@foster')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@foster')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for foster', () => {
        cy.get('@foster')
            .its('body')
            .should('include', { id: 'foster' });
    });
 });

 describe('API test helpUs', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/helpUs').as('helpUs');
    });
 
    it('Validate the header', () => {
        cy.get('@helpUs')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@helpUs')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for helpUs', () => {
        cy.get('@helpUs')
            .its('body')
            .should('include', { id: 'helpUs' });
    });
 });

 describe('API test volunteer', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/volunteer').as('volunteer');
    });
 
    it('Validate the header', () => {
        cy.get('@volunteer')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@volunteer')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for volunteer', () => {
        cy.get('@volunteer')
            .its('body')
            .should('include', { id: 'volunteer' });
    });
 });

 describe('API test adopt', () => {

    beforeEach(() => {
        cy.request('http://localhost:3001/text/adopt').as('adopt');
    });
 
    it('Validate the header', () => {
        cy.get('@adopt')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
    it('Validate the status code', () => {
        cy.get('@adopt')
            .its('status')
            .should('equal', 200);
    });
 
    it('Validate the source for adopt', () => {
        cy.get('@adopt')
            .its('body')
            .should('include', { id: 'adopt' });
    });
 });
