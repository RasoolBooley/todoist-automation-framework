import loginPageSelectors from '../support/pageObjects/homePageSelectors.js';


describe('Create Project Success', () => {
  before(() => {
    cy.createProject();
    cy.createTask();
  });

  it('Logs in', () => {
    // cy.visit('https://todoist.com/');
    // cy.contains(loginPageSelectors.loginButton).click()
    // cy.get(loginPageSelectors.newTabCta).invoke('removeAttr', 'target').click();
    cy.log('here is a test')
  })

  after(() => {
      cy.deleteProject();
  });
})

