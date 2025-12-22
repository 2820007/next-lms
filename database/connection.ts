
import mongoose  from "mongoose";


 const MONGODB_CS=process.env.MONGODB_CS


 if(!MONGODB_CS){
    throw new Error("You must proved connection string")

 }


 const dbConnect= async ()=>{

    if(mongoose.connection.readyState === 1){
        console.log("database is already connected..")
        return
    }

   try {
    await mongoose.connect(MONGODB_CS)
    console.log("Database connected successfully...")
    
   } catch (error) {
    console.log("Error connecting db...",error)
    
   }
 }

 export default dbConnect