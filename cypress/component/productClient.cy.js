import {ProductClient} from '../../lib/product/productClient'

const mockDomain = 'https://mock.com'

describe('productClient.cy.js', () => {
  it('type check', () => {
    expect(ProductClient, 'import').to.be.a('function')
    expect(ProductClient().getProducts).to.be.a('function')
    expect(ProductClient().getProducts()).to.be.a('promise')
  })
  it('test return', () => {
    cy.intercept(mockDomain, {products: 'fake'}).as('getProducts')
    ProductClient().getProducts(mockDomain)
    cy.wait('@getProducts').then(interception => {
      const requestUrl = interception.request.url
      expect(requestUrl).to.have.string(mockDomain)
    })
  })
  it('fail', () => {
    cy.intercept(mockDomain, {statusCode: 500} ).as('getProducts')
    cy.on("uncaught:exception", (err) => {
      expect(err).to.include('Failed to get products')
      return false
    })

    ProductClient().getProducts(mockDomain)
  })
})
