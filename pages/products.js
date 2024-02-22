import {ProductService} from "../lib/product/productService"
import {TemplateService} from "../lib/template/templateService"
import {useEffect, useState} from "react"
import ProductCard from "../components/ProductCard"
import Bag from "../components/Bag"


export default function Products(props){
    const templateService = TemplateService()
    const [template, setTemplate] = useState([])

    useEffect(() => {
        async function getInitialTemplate() {
            setTemplate(await templateService.getTemplate())
        }
        getInitialTemplate()
    }, [])
    async function addToTemplateHandler(product){
        console.debug("%c addToTemplate(product), product: %o, template: %o", product, template)
        const updatedTemplate = await templateService.addProduct({template, product})
        console.debug("%c addToTemplate(), result: %o", updatedTemplate)

        setTemplate(updatedTemplate)
    }

    if(!props.products){
        return <div>Loading . . .</div>
    }


    return <div className="w-full my-4 flex flex-col items-center">
        <div className="text-4xl text-center border-transparent border-b-4 border-b-amber-900 px-6"> Products Page </div>
        <div className="flex my-5">
            {/* Product Display */}
            <div className="">
                {props?.products?.map(product => <ProductCard key={product?.id} product={product} addProductHandler={addToTemplateHandler} />)}
            </div>
            {/*  Template Bag  */}
            <div className="w-1/3">
                <Bag bag={template?.bag}/>
            </div>
        </div>
    </div>
}

export async function getStaticProps(){
    try{
        const productService = ProductService()
        const products = await productService.getProducts()

        return {
            props: {
                products,
            },
            revalidate: 3600 // Incremental Static Regeneration (ISR) -- revalidate sets how often the page should be regenerated; in seconds
        }
    } catch(error){
        const contentError = {
            statusCode: error.cause?.statusCode,
            message: error.message
        }

        throw new Error(`Products getStaticProps Error ${JSON.stringify(contentError)}`)
    }
}
