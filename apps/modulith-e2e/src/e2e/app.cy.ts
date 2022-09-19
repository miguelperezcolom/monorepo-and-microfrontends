import {getDashboardLink, getGreeting} from '../support/app.po';

describe('modulith', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome');
  });


  it('should display the dashboard link', () => {
    // Function helper example, see `../support/app.po.ts` file
    getDashboardLink().contains('Dashboard');
  });

});
