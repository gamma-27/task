import {NextResponse} from 'next/server';
import {NextRequest} from 'next/server';

export function middleware(request){
    // console.log("miidle")
const authToken=request.cookies.get("authToken")?.value;
if(
    request.nextUrl.pathname==='/api/login' || request.nextUrl.pathname==='/api/users'

){
    return;
}

//console.log(authToken)
const loggedInUserNotAccessPaths=request.nextUrl.pathname==='/login' || request.nextUrl.pathname==='/signup'
if(loggedInUserNotAccessPaths){
    if(authToken){

       

        return  NextResponse.redirect(new URL("/profile/user",request.url));
    }
}

   else{
    //accessing secured routes
    if(!authToken){

        if(request.nextUrl.pathname.startsWith("/api")){
            return NextResponse.json({
                message:"Access Denied",
                success:false
            },{
                status:401,
            })
        }

        return NextResponse.redirect(new URL("/login",request.url));
    }

   }
}

export const config={
    matcher:[
        
        "/add-task",
        "/login",
        "/signup",
        "/show-task",
        "/api/:path*",
        "/profile/:path*",
    
    ]
}