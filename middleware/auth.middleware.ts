import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/database/models/user.schema";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const  authMiddleware= async (req:NextRequest)=>{
    //check if login or not


    const session=await getServerSession(authOptions)

    if(!session || session.user.role !==Role.Admin){
        return Response.json({
            message:"You do not have permission to do this action"

        },{status:401


        })
    }


   return NextResponse.next()


    

}

export default authMiddleware