"use client"
import {signIn} from "next-auth/react"
const page = () => {
  return (
    <button onClick={()=>{signIn("google")}}>sing in with google</button>
  )
}

export default page