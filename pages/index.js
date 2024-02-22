import Link from "next/link"


export default function Index() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="font-bold text-4xl m-5">Welcome</h1>
            <div data-testid="products-link" className="font-semibold text-xl underline">
                <Link href={'/products'}>See Products</Link>
            </div>
        </div>
    )
}
