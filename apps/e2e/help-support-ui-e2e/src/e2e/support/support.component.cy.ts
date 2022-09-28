describe('help-support-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=supportcomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-support').should('exist');
  });
});
