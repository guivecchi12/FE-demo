import {ProductService} from "../lib/product/productService"
import Image from "next/image"
import { Rating } from "@material-tailwind/react"
import {TemplateService} from "../lib/template/templateService"
import {useState} from "react"


export default async function Products(props){
    const templateService = TemplateService()
    const initialTemplate = templateService.getTemplate()
    console.log("---> initial template", initialTemplate)
    const [template, setTemplate] = useState([initialTemplate])
    async function addToTemplate(product){
        console.debug("%c addToTemplate(product), product: %o, template: %o", product, template)
        const updatedTemplate = templateService.addProduct({template, product})
        setTemplate(updatedTemplate)
    }


    return <div className="my-4">
        <div className="text-4xl text-center"> Products Page </div>
        <button className="m-4" onClick={() => console.log(template)}> Template Products: {template?.bag?.products?.length}</button>
        {props.products.map(product => {
            return (
                <div key={product.id} className='flex w-11/12 sm:w-5/6 xl:w-1/3  justify-between items-center border border-2 rounded-lg p-4 mx-auto my-5'>
                    <Image
                        src={product?.image}
                        alt={product?.title}
                        width={100}
                        height={100}/>
                    <div className="w-2/3 flex flex-col self-start">
                        <p className="self-end my-2 text-center w-fit bg-blue-300 text-brand-bodyBlue py-1 px-4 rounded-full">{product?.category}</p>
                        <p className="font-bold my-2">{product?.title}</p>
                        <div className="flex justify-between">
                            <p className="my-2">Price: ${product?.price}</p>
                            <div className="flex items-center">
                                <span>{product.rating.rate}</span>
                                <Rating value={Math.round(product.rating.rate)} readonly/>
                                <span className="px-4">{product.rating.count}</span>
                            </div>
                        </div>
                        <button onClick={() => addToTemplate(product)} className="my-2 mr-[5%] w-full text-center bg-red-300 text-brand-bodyBlue py-1 px-4 rounded-full pointer">Add to bag</button>
                    </div>
                </div>
            )
        })}
    </div>

}

export async function getStaticProps(){
    try{
        const productService = ProductService()
        const products = await productService.getProducts()

        return {
            props: {
                products
            },
            revalidate: 60 // Incremental Static Regeneration (ISR) -- revalidate sets how often the page should be regenerated; in seconds
        }
    } catch(error){
        throw new Error(`Products getStaticProps error: ${error}`)
    }
}
