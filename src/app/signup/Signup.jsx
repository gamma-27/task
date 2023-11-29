"use client"
import React, { useState } from 'react'
import {toast } from 'react-toastify';
import axios  from 'axios';


const Signup = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        about:"",
        profileURL:"https://clipground.com/images/sign-up-icon-png-1.png"
    })

    const  doSignup=async (event)=>{
        event.preventDefault();
        console.log(event);
        // console.log(data);
        if(data.name.trim() === "" || data.name == null ){
            toast.warning("Name is required",{
                position:"top-center",
            });
            return;
        }

        try{
            const result= await axios.post('/api/users',data);
        console.log(result);
        toast.success("Succesfuully added user",{
            position:"top-center",
        })
        setData({
            name:"",
            email:"",
            password:"",
            about:"",
            profileURL:"https://clipground.com/images/sign-up-icon-png-1.png",


        })
        }
        catch(error){
            console.log(error,"cant fecth user");
      toast.error("User not added",{
        position:"top-center",
      })
        }

    }

    const resetForm=()=>{
        setData({
            name:"",
            email:"",
            password:"",
            about:"",
            profileURL:"https://clipground.com/images/sign-up-icon-png-1.png",

        })

    }

  return (
    <div className='grid grid-col-12 justify-center'>
        <div className='col-span-4 col-start-5'>
            <div className='py-5 justify-center '>
                <div className='flex justify-center m-5'>
                    <img src="logins.svg" alt="signup image"  className='h-29 w-20' 
                    style={{
                        width:"20%",
                    }}
                    />
                </div>
                <h1 className='text-3xl text-center'>Sign Up Here</h1>
                <form action='#!' className='m-5' onSubmit={doSignup}>
                    <div className='mt-3 text-center'>
                        <label htmlFor='user_name' className='block text-sm font-medium mb-2'>Username</label>
                        <input type="text" className='p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_name" placeholder='Enter here' 
                        name="user_name"
                        onChange={(event)=>{
                            setData({
                                ...data,
                                name:event.target.value,
                            })
                        }}
                        value={data.name}
                        />
                    </div>

                    <div className='mt-3 text-center'>
                        <label htmlFor='user_email' className='block text-sm font-medium mb-2'>Email</label>
                        <input type="email" className=' p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_email" placeholder='Enter email here' 
                         name="user_email"
                         onChange={(event)=>{
                             setData({
                                 ...data,
                                 email:event.target.value,
                             })
                         }}
                         value={data.email}
                        />
                    </div>

                    <div className='mt-3 text-center'>
                        <label htmlFor='user_password' className='block text-sm font-medium mb-2'>Password</label>
                        <input type="text" className=' p-3 rounded-full bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_password" placeholder='Type password' 
                         name="user_password"
                         onChange={(event)=>{
                             setData({
                                 ...data,
                                 password:event.target.value,
                             })
                         }}
                         value={data.password}
                        />
                    </div>

                    <div className='mt-3 text-center '>
                        <label htmlFor='user_about' className='block text-sm font-medium mb-2'>About</label>
                        <textarea   className='   p-3 rounded-lg bg-gray-800 focus:ring-gray-400 border border-gray-800 ps-3' id="user_about" placeholder='Enter about' rows={8}
                         name="user_about"
                         onChange={(event)=>{
                             setData({
                                 ...data,
                                 about:event.target.value,
                             })
                         }}
                         value={data.about}
                        ></textarea>
                    </div>

                    <div className='mt-3 space-x-3 text-center'>
                        <button type="submit" className='px-3 py-3 bg-green-600 rounded hove:bg-green-400 '>Signup</button>
                        <button onClick={resetForm} type="button" className='px-3 py-3 bg-orange-600 rounded hove:bg-orange-400 '>Reset</button>
                    </div>

                    {
                        JSON.stringify(data)
                    }

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup