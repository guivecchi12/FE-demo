function ProductClient() {
    return {
        getProducts: async () => {
            console.debug("%c     >>> PRODUCT_CLIENT: getProducts: ", "color:green")
            const endpoint = 'https://fakestoreapi.com/products'
            const response = await fetch(endpoint)
            if(!response.ok){
                const message = "Failed to get products"
                throw new Error(message)
            }
            const products = await response.json()
            console.debug("%c     <<< PRODUCT_CLIENT: getProducts: ", "color:green")
            console.debug("%c     result: (products: %o)", "color:green", products)
            return products
        }
    }
}

export {ProductClient}
