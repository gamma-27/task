"use client";
import React, { useContext, useState } from 'react'
import {toast } from 'react-toastify';
import {useRouter} from 'next/navigation';
import axios  from 'axios';
import UserContext from '@/context/userContext';
const Login = () => {

    const router=useRouter();
    const context=useContext(UserContext);
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    });

    const LoginformSubmiited=async (event)=>{
        event.preventDefault();
        //if no data
        if(loginData.email.trim()==="" || loginData.password.trim()===""){
            toast.info("Inavalid data",{
                position:"top-center",
            });
            return;
        }

        //valid data
       try{
        const result=await axios.post('/api/login',loginData)
        console.log(result);
        toast.success("Logged in");
        context.setUser(result.user);
       
        router.push('/profile/user');
        

       }
       catch(error){
        console.log(error)
        toast.error(error.response.data.message,{
            position:"top-center",
        })
       }
    };

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5'>
            <div className='py-5'>
                <h1 className='text-3xl text-center'>Login Here</h1>
                <form action='#!' className='m-5' onSubmit={LoginformSubmiited} >
                    

                    <div className='mt-3'>
                        <label htmlFor='user_email' className='block text-sm font-medium mb-2'>Email</label>
                        <input type="email" className='w-full p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_email" placeholder='Enter email here' 
                         name="user_email"
                         onChange={(event)=>{
                             setLoginData({
                                 ...loginData,
                                 email:event.target.value,
                             })
                         }}
                         value={loginData.email}
                         />
                    </div>

                    <div className='mt-3'>
                        <label htmlFor='user_password' className='block text-sm font-medium mb-2'>Password</label>
                        <input type="text" className='w-full p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_password" placeholder='Type password' 
                         name="user_password"
                         onChange={(event)=>{
                             setLoginData({
                                 ...loginData,
                                 password:event.target.value,
                             })
                         }}
                         value={loginData.password}
                        />
                    </div>

                    

                    <div className='mt-3 space-x-3 text-center'>
                        <button type="submit" className='px-3 py-3 bg-green-600 rounded hove:bg-green-400 '>Login</button>
                        <button  type="button" className='px-3 py-3 bg-orange-600 rounded hover:bg-orange-400 '>Reset</button>
                    </div>

{
    JSON.stringify(loginData)
}
                    

                    
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login