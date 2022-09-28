describe('help-support-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formcomponent--primary'));
  it('should render the component', () => {
    cy.get('monorepo-form').should('exist');
  });
});
