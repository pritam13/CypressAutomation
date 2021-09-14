describe('My First Test', () =>
 {
    it('Does not do much!', () => 
    {
      cy.visit('https://example.cypress.io/commands/actions')
      expect(true).to.equal(true)
    })
  })