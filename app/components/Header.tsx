"use client"

import { signOut } from "next-auth/react"



export default function Header(){

    const handleLogout=async()=>{
       await signOut({
        callbackUrl:'/login'

        })

    }
    return(
        <header className="shadow flex justify-between items-center px-3 bg-black">
            <img src="https://png.pngtree.com/png-vector/20250914/ourmid/pngtree-notes-app-pencil-icon-and-notepad-on-blue-png-image_17441933.webp" width={70} alt="" />
            <button onClick={handleLogout} className="bg-blue-600 text-white p-2 rounded">LOGOUT</button>
        </header>
    )
}