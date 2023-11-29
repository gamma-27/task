import {NextResponse} from "next/server"
import { Task } from "@/models/task";
import { getResponseMessage } from "@/helper/errorMessage";
export async function GET(request,{params}){

    const {userId}=params;
    try{
        const tasks=await Task.find({
            userId:userId

        }).select("-password")
        return NextResponse.json(tasks);
    }
    catch(error){
        return getResponseMessage('failed',404,false)
    }
}