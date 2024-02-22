function TemplateClient(){
    console.debug("%c     >>> TemplateClient: getProducts: ", "color:green")
    return {
        updateTemplate: async (newTemplate) => {
            console.debug("%c     >>> updateTemplateBag: (newBag: %o) ", "color:green", newTemplate)
            // api call
            const endpoint = 'http://localhost:8000/api/template'
            const config = {
                method: 'PUT',
                body: JSON.stringify(newTemplate)
            }
            const response = await fetch(endpoint, config)

            const updatedTemplate = await response.json()
            console.debug("%c     <<< updateTemplateBag: getProducts: ", "color:green")
            console.debug("%c     result: (updatedTemplate: %o)", "color:green", updatedTemplate)

            return updatedTemplate
        },
        getTemplate: async () => {
            console.debug("%c     >>> getTemplate: () ", "color:green")
            const endpoint = 'http://localhost:8000/api/template'
            const response = await fetch(endpoint)

            if(!response.ok){
                const message = ("Error in getTemplate")
                throw new Error(message)
            }

            const template = await response.json()
            console.debug("%c     <<< updateTemplateBag: getProducts: ", "color:green")
            console.debug("%c     result: (template: %o)", "color:green", template)
            return template
        }
    }
}
export {TemplateClient}
