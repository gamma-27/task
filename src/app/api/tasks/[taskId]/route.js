import { getResponseMessage } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import {NextResponse} from "next/server"

export async function PUT(request,{params}){
    const {taskId}=params;
    const {title,content,userId,status}=await request.json();

    try{
        const task=await Task.findById(taskId);
        task.title=title;
        task.content=content;
        task.userId=userId;
        task.status=status;

        const updatedTask=await task.save();
        return NextResponse.json(updatedTask);
     
    }
    catch(error){
        return getResponseMessage('failed update',500,false)
    }
}


export async function GET(request,{params}){
    const {taskId}=params;
    try{
        const task=await Task.findById(taskId);
        return NextResponse.json(task);

    }
    catch(error){
        return getResponseMessage('failed hehe',404,false)
    }
    
}


export async function DELETE(request, { params }) {
    const { taskId } = params;
  
    try {
      await Task.deleteOne({
        _id: taskId,
      });
  
      // Return a success response
      return getResponseMessage('Successfully deleted', 200, true);
    } catch (error) {
      // Return an error response
      return getResponseMessage('Failed to delete', 500, false);
    }
  }