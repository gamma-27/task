import { User } from "@/models/user"
import {NextResponse} from "next/server"

export async function DELETE(reques, {params}){
    const {userId}=params
    try{
        await User.deleteOne({
            _id:userId
        })
        return NextResponse.json({
            message:'user deleted',
            success:true 
        })
    }
    catch(error){
        return NextResponse.json({
            message:'failed',
            success:false
        })
    }
}

export async function GET(request,{params}){
    const {userId}=params
    try{
        const user=await User.findById(userId).select("-password");
        return NextResponse.json(user);
    
    }
    catch(error){
        return NextResponse.json({

            message:'failed hu me',
            success:false
        })
    }

    
}
export async function PUT(request,{params}){
    const {userId}=params
    const {name,password,about,profileURL}=await request.json();

    try{
        const user=await User.findById(userId)
        user.name=name;
        user.about=about;
        user.password=password;
        user.profileURL=profileURL;
  
        const updatedUser=await user.save();

        return NextResponse.json(updatedUser);

    }
    catch(error){
        return NextResponse.json({
            message:'failed',
            success:false
        })
    }
}