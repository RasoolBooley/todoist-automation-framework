

Cypress.Commands.add('createProject', () => {
    const authToken =  Cypress.env('authToken'); // add to read me later 
    const requestId = Cypress._.random(0, 1e6);
    // let projectId = Cypress.env('projectId');

    cy.request({
        method: 'POST',
        url: 'https://api.todoist.com/rest/v2/projects', 
        headers: {
          'Authorization': `Bearer ${authToken}`, 
          'Content-Type': 'application/json',
          'X-Request-Id': requestId.toString()
        },
        body: {
          name: 'Quick Post test'
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
        Cypress.env('projectId', response.body.id); // Set projectId as an environment variable
        cy.log(response.body.id);
      });
    });


Cypress.Commands.add('createTask', () => {
    const authToken =  Cypress.env('authToken');
    const projectId = Cypress.env('projectId');

    cy.log(projectId)
  
    cy.request({
        method: 'POST',
        url: 'https://api.todoist.com/rest/v2/tasks', 
        headers: {
          'Authorization': `Bearer ${authToken}`, 
          'Content-Type': 'application/json'
        },
        body: {
          content: 'This is your task',
          project_id: Cypress.env('projectId')
        }
      }).then((response) => {
          expect(response.status).to.eq(200); 
          cy.log(response.body.id); 
        });
      });

Cypress.Commands.add('getTasks', () => {
      const authToken =  Cypress.env('authToken');
      const projectId = Cypress.env('projectId');
    
      cy.log(projectId)
      
      cy.request({
          method: 'GET',
          url: 'https://api.todoist.com/rest/v2/tasks', 
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            const tasksInProject = response.body;
            cy.log(tasksInProject); 
          });
        }); 



Cypress.Commands.add('deleteProject', () => {
    const authToken =  Cypress.env('authToken');
    const projectId = Cypress.env('projectId');
  
    cy.request({
        method: 'DELETE',
        url: `https://api.todoist.com/rest/v2/projects/${projectId}`, 
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          expect(response.status).to.eq(204); 
          cy.log(projectId)
        });
      });


Cypress.Commands.add('loginUser', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
      
    cy.request({
        method: 'POST',
        url: 'https://app.todoist.com/api/v9.17/user/login',
        headers: {
            'Content-Type': 'application/json'
          },
          body: {
            email: username,
            password: password,
            pkce_oauth: null,
            web_session:true,
            permanent_login:true,
            device_id:"e19df3e5-b3bd-50da-085a-5d936d963a82"
          }
      }).then((response) => {
          const authToken = response.body.token;
      
          cy.window().then((window) => {
            window.localStorage.setItem('authToken', authToken);
          });
        });
      });