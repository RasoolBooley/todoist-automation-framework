

Cypress.Commands.add('createProject', () => {
    let authToken =  Cypress.env('authToken'); // add to read me later 
    let projectId; 
    const requestId = Cypress._.random(0, 1e6);

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
        projectId = response.body.id; 
      });
    });
