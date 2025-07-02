import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS =['/login','/'];

async function isPagesAPIRouteMatch(req){
    const token = req.cookies.get('newToken')?.value;
    if(!token){
        return false;
    }
    try{
        const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
        await jwtVerify(token,SECRET_KEY);
        return true;
    }catch(err){
        return false
    }



}

export async function middleware(req){
    try{
        const { pathname}=req.nextUrl;
        if(PUBLIC_PATHS.includes(pathname)){
            return NextResponse.next()
        }
        const auth = await isPagesAPIRouteMatch(req)
        if(!auth){
            return NextResponse.redirect(new URL('/login',req.url));
        }
        return NextResponse.next()

    }
    catch(err){
        console.log("Error",err)

    }
    
}
export const config={
        matcher:['/products/:path*','/products']
    };



