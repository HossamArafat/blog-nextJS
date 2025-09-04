import getPost from "@/app/helpers/api"
import Card from "@/components/Card"

export default async function Post({params}) {
    const { name } = await params 
    const user = await getPost(name)

    return (
        <>
            <h1 className="mb-0 pt-25 text-3xl font-extrabold leading-none tracking-tight text-gray-400 md:text-4xl lg:text-5xl text-center">Details Page</h1>
            <div className="px-5 md:px-20 lg:px-50 pb-20 py-20">
                <Card user={user} metadata={"userDetails"}/>
            </div>
        </>
    )
}