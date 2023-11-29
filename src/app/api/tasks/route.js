
import {Task} from "@/models/task"
import { NextResponse } from "next/server";
import { getResponseMessage  } from "@/helper/errorMessage";
import jwt from 'jsonwebtoken';
export async function GET(request){
    try{
        const tasks=await Task.find()
        return NextResponse.json(tasks);
    }catch(error){
        return getResponseMessage("failed",404,false)
    }



}

export async function POST(request) {
    const { title, content,userId,status} = await request.json();
  
   
    const authToken = request.cookies.get("authToken")?.value;

    const data = jwt.verify(authToken, process.env.JWT_KEY);
    
  console.log(data._id);
    try {
      const task =await new Task({
        title,
        content,
        userId:data._id,
        status
        

        
      });

      //fetching logged in user id:
      
  
      const createdTask = await task.save();
      return NextResponse.json(createdTask, {
        status: 201,
      });
    } catch (error) {
      console.log(error);
      console.log("my message");
      return getResponseMessage("Failed to create Task !! ", 500, false);
    }
  }
  