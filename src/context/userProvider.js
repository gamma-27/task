"use client"
import React, {useEffect, useState} from 'react'
import UserContext from './userContext'
import {toast} from "react-toastify"
import axios from "axios";
import { currentUser } from '@/services/userService';
const UserProvider = ({children}) => {
    
const [user,setUser]=useState(undefined);

useEffect(()=>{
 
    async function load(){
      try{
        const tempUser=await currentUser();
        console.log(tempUser);
        setUser({...tempUser});
      }
      catch(error){
        console.log(error);
        //toast.error("error in loading user");
        setUser(undefined)
      }
    }
  
   if(!user){
    load();
   }
  
  
  
},[])

  return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
  );
}

export default UserProvider;