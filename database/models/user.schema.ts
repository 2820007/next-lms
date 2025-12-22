import mongoose from "mongoose";

const userSchema=new mongoose.Schema(

     {
        userName:{
            type:String,
            required:true,

        },

        email:{
            type:String,


        },

        googleId:{
            type:String
        },

        profileImage:{
            type:String,
        }

     },
     {
    autoCreate:true,
    autoIndex:true,
     }
)


const User=mongoose.model("User",userSchema)
export default User

