import Link from 'next/link';
import React from 'react'

// lets make a fetch request for all the users
// const getAllusers = async()=>{
//   const result = await fetch('http://localhost:3000/api/posts');
//   return result.json()
// }
const Skills = async() => {
  // const gottenAll = await getAllusers()
  return (
    <div>
      {/* {gottenAll.map((user)=>(<div key={user.id}>
        <p>{user.name}</p> */}
        {/* <Link href={`/skills/${user.id}`}>check on {user.name}</Link>
      </div>))} */}
      <p>sures</p>
    </div>
  )
}

export default Skills