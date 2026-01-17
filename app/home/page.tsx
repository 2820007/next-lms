"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"
const Home = () => {

  const {data:session}=useSession()
  if(session){
    return(
      <>
       <Image src={session.user?.image || "mero-profile.png "} alt="profile-image" width={80} height={80}/>
      <h1>Welcome,{session.user?.name}</h1>
       <h1>{session.user?.email}</h1>
       <button onClick={()=>{signOut()}}>Sign Out</button>
      </>
    )
  }
  return (
    <div>
      <h1>Not logged In</h1>
      <button onClick={()=>{signIn("google")}}>sing in with google</button>
    </div>
  )
}

export default Home