import dbConnect from "@/database/connection"
import Category from "@/database/models/category.schema"

export async function createCategory(req:Request){

   try {
     await dbConnect()

   const {name,description} =await req.json()

   const existingCategory=await Category.findOne({name:name})
   if(existingCategory){
    return Response.json({
        message:"Category all ready existsted with that name.."
    },{status:400})
   }
    
   await Category.create({
    name,
    description
   })
   return Response.json({
    message:"Category created successfully!"
   },{status:201})
    
   } catch (error) {
    console.log(error)
    return Response.json({
        message:"Something went wrong"
    },{status:500})
    
   }
}



export async function getCategories(){
  try {
     await dbConnect()

    const categories=await Category.find()
    if(categories.length ===0 ){
        return Response.json({
            message:"No Categories Found"
        },{status:404})
    }

    return Response.json({
        message:"Category fetched successfully...",
        data:categories
    },{status:200})
    
  } catch (error) {
    console.log(error)
    return Response.json({
        message:"something went wrong.."
    },{status:500})
    
  }
}