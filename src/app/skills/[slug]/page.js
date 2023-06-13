import React from 'react'
// lets get one post
// const getOne = async(id)=>{
//     const response = await fetch(`http://localhost:3000/api/posts/${id}`);
//     return response.json()
// }

// here we generate a static params
// export async function generateStaticParams() {
//     const posts = await fetch('/api/posts/').then((res) => res.json())
   
//     return posts.map((post) => ({
//       slug: post.id,
//     }))
//   }
const Runone = async({params}) => {
    // const { slug } = params
    // const gotten = await getOne(slug)
    // console.log(gotten)
  return (
    <div>
        {/* <p>{gotten[0].id}</p>
        <p>{gotten[0].name}</p> */}
        <p>loves</p>
    </div>
  )
}

export default Runone