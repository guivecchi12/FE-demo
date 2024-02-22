export default function Bag({bag}){
    return (
        <div className="border-2 border-purple-500 rounded-lg p-4 mx-auto h-fit">
            <h3 data-testid="bag-title" className="text-lg font-bold text-center">Bag</h3>
            <div className="flex justify-between">
                <div data-testid="bag-size">Items ({bag?.products?.length || 0})</div>
                <div data-testid="bag-total">Total ${(bag?.total || 0).toFixed(2)}</div>
            </div>
            <div className="border-b-4 border-purple-200 mb-2"/>
            {bag?.products.map((product, index) => {
                return (
                    <div key={index} data-testid={`bag-product_${product?.id}`} className="flex items-center justify-between relative my-6">
                        <p data-testid="bag-product-title" className="w-3/4 truncate">{product?.title}</p>
                        <p data-testid="bag-product-price" className="pr-5">${product?.price?.toFixed(2)}</p>
                        <span data-testid="bag-product-delete" className="text-white text-xs bg-red-300 border border-red-500 px-1.5 rounded-full absolute -top-4 right-0 cursor-pointer" onClick={() => console.debug("Remove me:", product)}>x</span>
                    </div>
                )
            })}
        </div>
    )
}
