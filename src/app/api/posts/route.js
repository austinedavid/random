export const users = [
    {id: 1, name: "augustine david", age:24},
    {id: 2, name: "augustine john", age:24},
    {id: 3, name: "augustine james", age:24},
    {id: 4, name: "augustine ken", age:24},
    {id: 5, name: "augustine runs", age:24},
    {id: 6, name: "augustine kendi", age:24}
]

export async function GET(req){
    return new Response(JSON.stringify(users), {status: 200})
}