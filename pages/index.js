import {useRouter} from "next/router"

export default function Index() {
    const router = useRouter()
    const handleClick = async (href) => {
        await router.push(href)
    }

    return <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="font-bold text-4xl m-5">Welcome</h1>
            <div className="font-semibold text-xl underline pointer" onClick={() => handleClick('/products')}>Go to Products</div>
        </div>
}
