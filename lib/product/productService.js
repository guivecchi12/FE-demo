import {ProductClient} from "./productClient"

function ProductService(){
    console.debug("%c     >>> ProductService()", "color: plum")
    const productClient = ProductClient()
    return {
        getProducts: async () => {
            try{
                // get all products
                console.debug("     >>> getProduct()", "color: plum")

                const products = await productClient?.getProducts()
                console.debug("%c     <<< getProduct()", "color: plum")
                console.debug("%c     result: (products: %o)", "color:plum", products)

                return products
            }
            catch(err){
                return []
            }
        }
    }
}

export { ProductService }
