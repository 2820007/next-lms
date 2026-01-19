import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";
import NextAuth, { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";




export const authOptions:AuthOptions={
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    async signIn({user}:{user:{name:string,email:string,image:string}}) :Promise<boolean>{
      try {
        await dbConnect()
       const existingUser=await User.findOne({email:user.email})
       if(!existingUser){
      await  User.create({
          userName:user.name,
          email:user.email,
          profileImage:user.image,
        })
       }
       return true
        
      } catch (error) {
        console.log(error)
        return false
        
      }
    },
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     async session({session,user}:{session:Session,user:any}){
     const data= await User.findById(user.id)
     session.user.role=data.role || "student"

    }


  }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
