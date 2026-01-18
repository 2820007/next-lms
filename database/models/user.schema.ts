import mongoose from "mongoose";

enum Role{
    Student="student",
    Admin="admin"

}

interface IUser extends Document{
    userName:string,
    profileImage:string,
    email:string,
    role:Role,
}
const userSchema=new mongoose.Schema<IUser>(

     {
        userName:{
            type:String,
            required:true,

        },

        email:{
            type:String,


        },

       role:{
        type:String,
        enum:[Role.Student,Role.Admin],
        default:Role.Student
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


const User=mongoose.models.User ||  mongoose.model("User",userSchema)
export default User

