import React from 'react'
import Bag from './Bag'

describe('<Bag />', () => {
  it('renders empty bag', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Bag />)
    cy.get('[data-testid="bag-title"]').should('exist')
    cy.get('[data-testid="bag-size"]')
        .should('exist')
        .should('contain', '0')
    cy.get('[data-testid="bag-total"]')
        .should('exist')
        .should('contain', '$0.00')
    cy.get('[data-testid="bag-product"]').should('not.exist')

  })
  it('render bag with products', () => {
    const bag = {
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 109.95,
        },
        {
          id: 2,
          title: "Product 2",
          price: 22.3
        }
      ],
      total: 132.2
    }
    cy.mount(<Bag bag={bag}/>)
    cy.get('[data-testid="bag-title"]').should('exist')
    cy.get('[data-testid="bag-size"]')
        .should('exist')
        .should('contain', '2')
    cy.get('[data-testid="bag-total"]')
        .should('exist')
        .should('contain', '$132.20')

    cy.get('[data-testid="bag-product_1"]').should('exist')
    cy.get('[data-testid="bag-product_1"] > [data-testid="bag-product-title"]')
        .should('exist')
        .should("contain",'Product 1')
    cy.get('[data-testid="bag-product_1"] > [data-testid="bag-product-price"]')
        .should('exist')
        .should('contain', '$109.95')
    cy.get('[data-testid="bag-product_1"] > [data-testid="bag-product-delete"]').should('exist')


    cy.get('[data-testid="bag-product_2"]').should('exist')
    cy.get('[data-testid="bag-product_2"] > [data-testid="bag-product-title"]')
        .should('exist')
        .should("contain",'Product 2')
    cy.get('[data-testid="bag-product_2"] > [data-testid="bag-product-price"]')
        .should('exist')
        .should('contain', '$22.30')
    cy.get('[data-testid="bag-product_2"] > [data-testid="bag-product-delete"]').should('exist')
  })
})
