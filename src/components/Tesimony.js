"use client"
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

export default function Tesimony() {
    const[data, setdata] = useState([])
    useEffect(()=>{
        const getposts = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"});
            const res = await response.json();
            setdata(res)
        }
        getposts()
    },[])
  return (
    <div>
        {
            data?.map((value)=>(<div key={value.id}>
                <Link href={`/testimony/${value.id}`}>{value.title}</Link>
                </div>))
        }
    </div>
  )
}
