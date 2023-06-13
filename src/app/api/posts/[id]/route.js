import { users } from "../route";
export async function GET(req, {params}){
    const userId = params.id;
    console.log("here running the function now")
    const filtered = users.filter((user)=> user.id == userId)
    return new Response(JSON.stringify(filtered), {status:200})
}