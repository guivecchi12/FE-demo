import React from 'react'
import ProductCard from './ProductCard'

describe('<ProductCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductCard />)
    cy.get('[data-testid^="product-card_"]')
    cy.get('[data-testid^="product-card_"] [data-testid="image"]')
    cy.get('[data-testid^="product-card_"] [data-testid="category"]')
    cy.get('[data-testid^="product-card_"] [data-testid="title"]')
    cy.get('[data-testid^="product-card_"] [data-testid="price"]')
    cy.get('[data-testid^="product-card_"] [data-testid="ratings"]')
    cy.get('[data-testid^="product-card_"] [data-testid="ratings"] [data-testid="rating"]')
    cy.get('[data-testid^="product-card_"] [data-testid="ratings"] [data-testid="count"]')
    cy.get('[data-testid^="product-card_"] [data-testid="add-button"]')
  })
  it('renders with product', () => {
    const product = {
      id: 123,
      image: '/mockImage',
      category: 'fake',
      title: 'mocked product',
      price: 123.25,
      rating: {
        rate: 4.2,
        count: 211
      }
    }

    cy.mount(<ProductCard product={product}/>)
    cy.get(`[data-testid^="product-card_${product.id}"]`)
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="image"]`).should('have.attr', 'src').and("contain", "mockImage")
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="category"]`).contains(product.category)
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="title"]`).contains(product.title)
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="price"]`).contains(`$${product.price}`)

    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="ratings"]`)
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="ratings"] [data-testid="rating"]`).contains(product.rating.rate)
    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="ratings"] [data-testid="count"]`).contains(product.rating.count)

    cy.get(`[data-testid^="product-card_${product.id}"] [data-testid="add-button"]`)
  })
  it('pricing format', () => {
    const product1 = {
      id: 1,
      price: 10.00
    }
    const product2 = {
      id: 2,
      price: 10
    }
    const product3 = {
      id: 3,
      price: 10.001
    }
    cy.mount(
        <>
          <ProductCard product={product1} />
          <ProductCard product={product2} />
          <ProductCard product={product3} />
        </>
    )

    cy.get('[data-testid^="product-card_1"] [data-testid="price"]').contains("$10.00")
    cy.get('[data-testid^="product-card_2"] [data-testid="price"]').contains("$10.00")
    cy.get('[data-testid^="product-card_3"] [data-testid="price"]').contains("$10.00")
  })
  it('button call', () => {
    const mockedCall = cy.spy().as('mockedButtonCall')
    cy.mount(<ProductCard addProductHandler={mockedCall}/>)

    cy.get('[data-testid^="product-card_"] [data-testid="add-button"]').click()
    cy.get('@mockedButtonCall').should('have.been.calledOnce')
  })
})
