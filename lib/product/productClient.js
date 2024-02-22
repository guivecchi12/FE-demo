function ProductClient() {
    return {
        getProducts: async (domain) => {
            try{
                console.debug("%c     >>> PRODUCT_CLIENT: getProducts: ", "color:green")
                const endpoint = domain ?? 'https://fakestoreapi.com/products'
                const response = await fetch(endpoint)

                const products = await response.json()
                console.debug("%c     <<< PRODUCT_CLIENT: getProducts: ", "color:green")
                console.debug("%c     result: (products: %o)", "color:green", products)
                return products
            } catch (err){
                const message = "Failed to get products"
                throw new Error(message)
            }

        }
    }
}

export {ProductClient}
