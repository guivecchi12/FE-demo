import {TemplateClient} from "./templateClient"

const _addProductToTemplate = ({template, product}) => {
    return {
        ...template,
        bag: {
            products: [
                ...template?.bag?.products,
                product
            ],
            total: template?.bag?.total + product?.price
        }
    }
}

function TemplateService(){
    console.debug("%c     >>> TemplateService()", "color: plum")
    const templateClient = TemplateClient()
    return {
        addProduct: async ({template, product}) => {
            try{
                console.debug("%c     >>> addProduct (template: %o, product: %o)", "color: plum", template, product)
                // add to template
                const newBag = _addProductToTemplate({template, product})
                const updatedTemplate = await templateClient.updateTemplate(newBag)
                console.debug("%c     <<< addProduct()", "color: plum")
                console.debug("%c     result: (updatedTemplate: %o)", "color:green", updatedTemplate)
                return updatedTemplate
            } catch(err){
                console.log("Error on add Product: ", err)
            }
        },
        getTemplate: async () => await templateClient.getTemplate()
    }
}

export {TemplateService, _addProductToTemplate}
