import {TemplateClient} from '../../lib/template/templateClient'

describe('templateClient.cy.js', () => {
  it('type check', () => {
    expect(TemplateClient, 'import').to.be.a('function')

    expect(TemplateClient().updateTemplate).to.be.a('function')
    expect(TemplateClient().updateTemplate()).to.be.a('promise')

    expect(TemplateClient().getTemplate).to.be.a('function')
    expect(TemplateClient().getTemplate()).to.be.a('promise')
  })
})
