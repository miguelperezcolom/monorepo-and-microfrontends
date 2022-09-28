describe('help-help-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=helpcomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-help').should('exist');
  });
});
