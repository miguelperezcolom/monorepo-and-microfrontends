describe('help-support-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=thankscomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-thanks').should('exist');
  });
});
