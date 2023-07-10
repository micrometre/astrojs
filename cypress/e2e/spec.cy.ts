
describe('The Home Page', () => {
  it('titles are correct', () => {
    const page = cy.visit('/');
    page.get('title').should('have.text', 'Astro Project')
  });
})
