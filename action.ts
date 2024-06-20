"use server"
import { revalidatePath } from "next/cache"
import {prisma} from "./lib/prismaindex"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const createpost = async(formdata: FormData) => {
    const {isAuthenticated} = getKindeServerSession()
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    const title = formdata.get("title") as string
    const body = formdata.get("body") as string
   
    await prisma.post.create({
        data: {
            title,
            body,
        }
    })
    revalidatePath("/posts")
}

export default createpost