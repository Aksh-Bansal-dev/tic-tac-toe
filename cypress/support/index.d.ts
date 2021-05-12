declare namespace Cypress {
  interface Chainable {
    customVisit(): Chainable<AUTWindow>;
  }
}
