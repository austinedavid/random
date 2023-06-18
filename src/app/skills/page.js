import Link from 'next/link';
import React from 'react'

import { openGraphImage } from '@/components/Shared'

export const metadata = {
  title: "the about page",
  description: "this is our about page",
  openGraph:{
    ...openGraphImage,
    title: "checking for the skills now "
  }
}


const getUsers = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json()
}
const getPosts = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json()
}
const Skills = async() => {
  const usersdata = getUsers()
  const postdata = getPosts()
  const[users, posts] = await Promise.all([usersdata, postdata])
  return (
    <div>
      <p>this is our users</p>
      {
        users.map((user)=>(
          <div key={user.id}>{user.name}</div>
        ))
      }
      <p>this is for the post</p>
      {
        posts.map((post)=>(<div div key={post.id}>
            {post.title}
        </div>))
      }
    </div>
  )
}

export default Skills