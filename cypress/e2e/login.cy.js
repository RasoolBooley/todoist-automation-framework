///<reference types="Cypress" />
import loginPageSelectors from '../support/pageObjects/homePageSelectors.js';



describe('Login to react redux', function () {
  beforeEach("load fixture", function () {
   cy.fixture('login').as('data');
   cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('Login user success', function () {
    cy.loginWithUI(this.data.validUsername, this.data.validPassword);
    cy.contains('Congratulations student. You successfully logged in!').should('be.visible');
  })

  it('Login incorrect username', function () {
    cy.loginWithUI(this.data.invalidUsername, this.data.validPassword);
    cy.contains('Your username is invalid!').should('be.visible');
  })

  it('Login incorrect password', function () {
    cy.loginWithUI(this.data.validUsername, this.data.invalidPassword);
    cy.contains('Your password is invalid!').should('be.visible')
  })
})

