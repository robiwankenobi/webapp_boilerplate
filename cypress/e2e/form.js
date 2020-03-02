describe('test button interaction', () => {
  it('clicks the button to disable it', () => {
    cy.visit('/');
    cy.findByText(/test/i)
      .click()
      .should('be.disabled');
  });
});
