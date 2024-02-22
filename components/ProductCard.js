import Image from "next/image"
import {Rating} from "@material-tailwind/react"

export default function ProductCard({product, addProductHandler}){
    const addProduct = (product) => {
        console.debug("ADDING PRODUCT", product)
        addProductHandler(product)
    }

    return (
        <div data-testid={`product-card_${product?.id}`} className='flex w-11/12 sm:w-2/3 justify-between items-center border-2 rounded-lg p-4 mx-auto'>
            <Image
                data-testid="image"
                src={product?.image}
                alt={product?.title}
                width={100}
                height={100}/>
            <div className="w-2/3 flex flex-col self-start">

                <p data-testid="category" className="self-end my-2 text-center w-fit bg-blue-300 text-brand-bodyBlue py-1 px-4 rounded-full">{product?.category}</p>
                <p data-testid="title" className="font-bold my-2">{product?.title}</p>
                <div className="flex justify-between">
                    <p data-testid="price" className="my-2">Price: ${parseFloat(product?.price?.toString()).toFixed(2)}</p>
                    <div data-testid="ratings" className="flex items-center">
                        <span data-testid="rating">{product?.rating?.rate}</span>
                        <Rating value={Math.round(product?.rating?.rate || 0)} readonly/>
                        <span data-testid="count" className="px-4">{product?.rating?.count}</span>
                    </div>
                </div>
                <button data-testid="add-button" onClick={() => addProduct(product)} className="my-2 mr-[5%] w-full text-center bg-red-300 text-brand-bodyBlue py-1 px-4 rounded-full pointer">Add to bag</button>
            </div>
        </div>
    )
}
