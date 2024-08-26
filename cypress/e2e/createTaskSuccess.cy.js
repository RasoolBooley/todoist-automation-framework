import loginPageSelectors from '../support/pageObjects/homePageSelectors.js';


describe('Create Project Success', () => {
  before(() => {
    cy.createProject();
  });

  it('Create Task Success', () => {
    cy.getTasks();
    cy.createTask();
    // cy.visit('https://todoist.com/');
    // cy.contains(loginPageSelectors.loginButton).click()
    // cy.get(loginPageSelectors.newTabCta).invoke('removeAttr', 'target').click();
    // cy.loginUser();
  })

  after(() => {
      cy.deleteProject();
  });
})

