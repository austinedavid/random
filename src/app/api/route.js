import {revalidateTag} from "next/cache"
export async function GET(req){
    console.log("running now")
    const tag = req.nextUrl.searchParams.get('tag')
    console.log("what is happening now",tag)
    revalidateTag(tag)
    return new Response(JSON.stringify({message: "it is working well fuck you "}))
}