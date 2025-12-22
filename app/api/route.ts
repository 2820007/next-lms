import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";



export async function GET(){
    dbConnect()
    await User.create({
        userName:"ravimandal",
        email:"mandalravi@gmail.com",
        googleId:"23891390373",
        profileImage:"image"


    })

    return Response.json({
        message:"You hit an api"

    })
}
