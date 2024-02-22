import {ProductService} from "../../lib/product/productService";

describe('productService.cy.js', () => {
  it('type check', () => {
    expect(ProductService, 'import').to.be.a('function')
    expect(ProductService().getProducts).to.be.a('function')
    expect(ProductService().getProducts()).to.be.a('promise')
  })
  it('successful response', () => {
    cy.wrap(ProductService().getProducts()).should('not.be.empty')
  })
})
