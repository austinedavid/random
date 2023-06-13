import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
        <p>About</p>
        <Link href="/about/kills?page=3&men=10&women=90">enter kills</Link>
    </div>
  )
}

export default About