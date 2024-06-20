import React from 'react'
import Link from 'next/link'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";




function Header() {
  return (
    <div className='bg-slate-900 text-white flex justify-end gap-5 p-5'>
        <ul className='flex gap-5'>
            <Link href= "/">
                <li>Home</li>
            </Link>
            <Link href= "/posts">
                <li>Posts</li>
            </Link>
            <Link href= "/create-post">
                <li>Create Post</li>
            </Link>
            <LogoutLink>Logout</LogoutLink>
        </ul>
    </div>
  )
}

export default Header