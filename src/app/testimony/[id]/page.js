import React from 'react'
// here, we will generate data prior before time

export async function generateStaticParams(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((res)=> res.json())

    return response.map((post)=>({
        id: post.id.toString()
    }))
}
// get the post with its id
const getpost = async(id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json()
}

const page = async({params:{id}}) => {
    const data = await getpost(id)
  return (
    <div>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
  )
}

export default page