import React from 'react'
import style from "@/app/globals.css"
import Link from 'next/link'
const header = () => {
  return (
    <div>
      <nav>
        <div className="main flex justify-between items-center shadow-lg px-5">
        <div className="first rounded-full h-20 w-20 border">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTdh7Z_blM8fWZqILdEWcRcRA5WrzE1VViGLbWWG_GkCP5zL9VB-_0ui9efZyy3YS1Mk&usqp=CAU"  className='object-contain rounded-full h-full w-full' alt=""  />
        </div>
        <div className="second">
          <ul className='flex justify-center items-center gap-5'>
    <Link href={"/"}>        <li>Home</li></Link>
    <Link href={"/about"}>        <li>About</li></Link>
    <Link href={"/contact"}>        <li>Contact</li></Link>
    <Link href={"/movie"}>        <li>Movie</li></Link>
          </ul>
        </div>

        </div>
      </nav>
    </div>
  )
}

export default header
