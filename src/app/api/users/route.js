import {NextResponse} from "next/server";
import {  User} from '@/models/user'
import bcrypt from "bcryptjs"
import {  connectDb} from '@/helper/db'

connectDb();


export async function GET(request){
    let users=[];

   try{
    users=await User.find().select("-password")
   }
   catch(error){
    console.log('failed')
    return NextResponse.json({
        message:'failed route get',
        success:false
    })
   }
   return NextResponse.json(users);
}

export async function POST(request){
    
    const {name,email,password,about,profileURL} =await request.json()

    const user=new User({
        name,email,password,about,profileURL


    })

    try{
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
        console.log(user)
        const CreatedUser=await user.save()
        const response=NextResponse.json(CreatedUser,{
            status:201,
        })
        return response
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:'failes to create user',
            status:false
        },{
            status:500,
        })

    }
   
}