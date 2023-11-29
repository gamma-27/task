"use client"
import {React, useContext} from 'react'
import Link  from 'next/link';
import UserContext from '@/context/userContext';
 import { logOut } from '@/services/userService';
import axios from "axios";
import {toast} from "react-toastify";
import { useRouter } from 'next/navigation';

const CustomNavbar = () => {
    const context=useContext(UserContext);
    
    const router=useRouter();
    
    async function doLogout(){
        try{
            const result=await logOut();
            console.log(result);
            context.setUser(undefined);
            router.push("/")
        }
        catch(error){
            console.log(error);
            toast.error("Logout errror")
        }
    }


  return (
    <nav className='bg-blue-600 h-16 py-2 px-10 flex justify-between items-center'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold'><a href='#!'>Work Manager</a></h1>
            </div>
        <div>
            <ul className='flex space-x-4 '>
               {
                context.user && (
                    <>
                     <li >
                <Link href="/" className='hover:text-blue-200'>Home</Link>
                </li>
                <li><Link href="/add-task" className='hover:text-blue-200'>Add Task</Link></li>
                <li><Link href="/show-task" className='hover:text-blue-200'>Show Tasks</Link></li>

                    </>
                )
               }
            </ul>
        </div>
        <div>
            <ul className='flex space-x-4'>
               {
                context.user && (
                    <>
                     <li>
                    <Link href="#!">{context.user.name}</Link>
                </li>
                <li>
                    <button  onClick={doLogout}>Logout</button>
                </li>
                    </>
                )
               }
               {
                !context.user && (
                    <>
                     <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <a href="/signup">Signup</a>
                </li>
                    </>
                )
               }
            </ul>
        </div>

    </nav>
  )
}

export default CustomNavbar