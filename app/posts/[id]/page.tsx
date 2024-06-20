
import { useParams } from 'next/navigation'
import React from 'react'
import {prisma} from "@/lib/prismaindex"
import { error } from 'console'

async function Post({ params }: { params: { id: string } }) {
    
    const data = await prisma.post.findUnique({
      where: {
        id: params.id as string
      }
    }) 
    if(!data){
      return (<p>No Posts</p>)
    }
  return (
    <div className='text-center p-5'>
        <h1 className='font-bold text-[30px] '>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default Post