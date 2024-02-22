describe('template spec', () => {
  beforeEach('setup interceptors', () => {
    cy.intercept('/api/template').as('getTemplate')
    cy.intercept('PUT', '/api/template').as('updateTemplate')
  })
  it('add product', () => {
    cy.visit('/')
    cy.get('[data-testid="products-link"]').click()
    cy.wait('@getTemplate')

    cy.get('[data-testid="product-card_1"]')
        .should('exist')
    cy.get('[data-testid="product-card_1"] [data-testid="add-button"]')
        .click()

    cy.wait('@updateTemplate')
    cy.get('[data-testid="bag-product_1"]')
        .should('exist')
  })
})
