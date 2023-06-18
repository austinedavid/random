
import React from 'react'
import { openGraphImage } from '@/components/Shared'

export const metadata = {
  title: "the about page",
  description: "this is our about page",
  openGraph:{
    ...openGraphImage,
    title: "running our project now"
  }
}

export default function Project() {
    // const sourceEnd = await getpaths()
   
  return (
    <div>
        <p>thanks</p>
       
    </div>
  )
}

