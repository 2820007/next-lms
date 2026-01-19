import mongoose from "mongoose";

export enum Role{
    Student="student",
    Admin="admin"

}

export interface IUser extends Document{
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

