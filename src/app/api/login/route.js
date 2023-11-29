import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";

import {  connectDb} from '@/helper/db'

connectDb();
export async function POST(request){
    const {email,password}=await request.json()
    try{
        const user=await User.findOne({

            email:email,
        });
        if(user==null){
            throw new Error("user not found !!");
        }

        const matched=bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error("Password not matched");
        }

        const token=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY)

        //create nextresponse then add to cookeie

        const response=NextResponse.json({
            message:"Login success",
            success:true,
            user:user
        })
        response.cookies.set("authToken",token,{
            expiresIn:"1d",
            httpOnly:true,
        })  
        console.log(token)
        console.log(user)

        return response;

    }
    catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({
            message: error.message,
            success: false
        }, {
            status: 500,
        });
    }
}
