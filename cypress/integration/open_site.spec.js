/// <reference types="Cypress" />

it('Open site', () => {
    cy.viewport('iphone-se2')
    cy.visit('https://samolet.ru/')
      .get('.index-intro__box-title')
});