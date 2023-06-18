import React from 'react'
import Link from 'next/link'
import { openGraphImage } from '@/components/Shared'

export const metadata = {
  title: "the about page",
  description: "this is our about page",
  openGraph:{
    ...openGraphImage,
    title: "checking for the about "
  }
}

const About = () => {
  return (
    <div>
        <p>About</p>
        <Link href="/about/kills?page=3&men=10&women=90">enter kills</Link>
    </div>
  )
}

export default About