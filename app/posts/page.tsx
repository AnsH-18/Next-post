import Link from 'next/link'
import React from 'react'
import {prisma} from "../../lib/prismaindex"

async function page() {

  const posts = await prisma.post.findMany()

  return (
    <div className='flex flex-col text-center p-6 text-lg font-semibold'>
      <p className='font-bold text-[35px] my-auto mb-10 mt-5'>All Posts</p>
        {posts.map(post => (
            <Link key={post.id} href= {`posts/${post.id}`}>
                <p  >{post.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default page