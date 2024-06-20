import React, { useState } from 'react'
import createpost from '@/action'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

async function CreatePost() {
  const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=http://localhost:3000/create-post");
  }

  return (
    <div>
        <form action={createpost} className='bg-slate-900 flex flex-col  min-h-screen justify-center items-center gap-10'>
          <p className='mb-12 text-white font-bold text-[35px]'>Create A Post</p>
            <input className='text-white bg-slate-700 p-5 w-3/4 md:w-1/2 h-10 border-1 border-slate-900' name='title'  placeholder='Post Title'></input>
            <textarea className='text-white bg-slate-700 p-5 w-3/4 md:w-1/2 h-24  border-1 border-slate-900' name='body' placeholder='Content'></textarea>
            <button className='px-5 py-5 text-white font bold bg-black' type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default CreatePost