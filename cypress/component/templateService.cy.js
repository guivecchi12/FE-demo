import {TemplateService, _addProductToTemplate} from "../../lib/template/templateService"

describe('templateService.cy.js', () => {
  it('type check', () => {
    expect(TemplateService, 'import').to.be.a('function')
    expect(TemplateService().getTemplate).to.be.a('function')
    expect(TemplateService().getTemplate()).to.be.a('promise')

    expect(TemplateService().addProduct).to.be.a('function')
    expect(TemplateService().addProduct()).to.be.a('promise')
    expect(_addProductToTemplate).to.be.a('function')
  })
  it('test util function', () => {
    const initialTemplate = {
      id: 1,
      name: 'myTemplate',
      bag: {
        products: [],
        total: 0
      }
    }
    const finalTemplate = {
      id: 1,
      name: 'myTemplate',
      bag: {
        products: [{name: 'new product'}],
        total: 0
      }
    }

    cy.wrap(_addProductToTemplate({template: initialTemplate, product:{name: 'new product'}})).should('deep.equal', finalTemplate)
  })
})
