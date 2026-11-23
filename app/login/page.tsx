"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"




export default function Login() {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" })
    const handleLogin =async () => {
        console.log("----------");
        
        const { email, password } = userDetails
                console.log(email,password);

        if (email && password) {

            await signIn("credentials",{
                email,password,callbackUrl:'/dashboard'
            })

        }
        else {
            toast.error("enter email & passord")
        }


    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-400 p-5 rounded w-100">
                <h1 className="text-center text-2xl text-blue-800 font-bold">Note Hub</h1>
                <p className="text-white text-center font-bold mt-2">Login</p>
                <form>

                    <div className="my-3 w-full">
                        <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className="my-3 w-full">
                        <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className="my-3 w-full text-center">
                        <button type="button" onClick={handleLogin} className="bg-blue-800 p-2 text-white rounded w-full">Login</button>
                        <p className="mt-3">New User? click here to <Link href={'/register'} className="text-blue-800 underline">Register</Link></p>
                    </div>
                </form>


            </div>

        </div>
    )
}