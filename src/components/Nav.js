"use client"
import React from 'react'
import {useRouter, usePathname} from "next/navigation"
import Link from 'next/link'
import styles from "./nav.module.css"

const navArray = [
    {id: 1, link: "/", name: "HOME"},
    {id: 2, link: "/about", name: "ABOUT"},
    {id: 3, link: "/project", name: "PROJECT"},
    {id: 4, link: "/skills", name: "SKILLS"},
    {id: 5, link: "/testimony", name: "TESTIMONY"}
]
const Nav = () => {
    const router = useRouter()
    const path = usePathname()
    const divided = path.split("/")
  
  return (
    <div>
        <h4>GmodeTech</h4>
        <div>
            {navArray.map((item)=>(
                <div key={item.id}>
                    <Link href={item.link} className={`${path == item.link || divided[1] == item.link.split("/")[1]? styles.active: ""}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Nav