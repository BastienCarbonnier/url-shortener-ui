describe('Url shortener', () => {
  const inputSelector = '[data-cy=urlToShorten]';
  const alertSuccessSelector = '[data-cy=alertSuccess]';

  beforeEach(() => {
    cy.visit(Cypress.env('app_base_url'));
  })

  it('should load', () => {
    cy.get(inputSelector).should('exist');
  })

  it('should shorten url', () => {
    cy.get(inputSelector).type('https://www.google.com{enter}');

    cy.get(alertSuccessSelector).should('exist');
  })

  it('should not accept string that are not url', () => {
    cy.get(inputSelector).type('ht{enter}');
    cy.get('label').should('contain.text', 'Please enter an url with the right format')
  })

  it('should change language', () => {
    const languageToggle = '[data-cy=languageToggle]';
    cy.get('[data-cy=mainTitle]').should('contain.text', 'Url shortener');
    cy.get(languageToggle).should('contain.text', 'fr');
    cy.get(languageToggle).click();
    cy.get(languageToggle).should('contain.text', 'en');
    cy.get('[data-cy=mainTitle]').should('contain.text', 'Raccourcisseur d\'URL');
  })

  it('when accessing shortened url we are redirected', () => {
    const urlShortenedLink = '[data-cy=urlShortenedLink]';
    cy.get(inputSelector).type('https://www.google.com{enter}');
    cy.get(urlShortenedLink).should('exist');
    cy.get(alertSuccessSelector).should('exist');
    cy.get(urlShortenedLink).click();
    cy.get('h4').should('contain.text', 'You will be redirect to your page in 2 seconds');
  })

})