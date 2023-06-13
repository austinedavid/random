import React from 'react'

const getpaths = async()=>{
    const response = await fetch("http://localhost:3000/api");
    const res = await response.json();
    return res
}
export default async function Projextcom() {
    const runners = await getpaths()
  return (
    <div>
        <p>{runners.message}</p>
    </div>
  )
}

