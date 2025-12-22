import mongoose from "mongoose";

const courseSchema=new mongoose.Schema(
    {
        courseName:{
            type:String,
        
        },

        courseDescription:{
            type:String

        },

        coursePrice:{
            type:Number,
        },

        courseDuration:{
            type:String

        },
    },
    {
        autoCreate:true,
        autoIndex:true,
    })


    const Course=mongoose.model("Course",courseSchema)


    export default Course