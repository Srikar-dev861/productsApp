import { createJWT } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(req) {
    try{
       const {email ,passward}=await req.json()
       if(email==="user@example.com" && passward==="passward"){
        const token = await createJWT({email});
        const res = NextResponse.json({message: "LoggedIn successful",email},{status:200});
        console.log(token,"Token")

        // res.cookies.set("newToken", token,{
        //     httpOnly:true,
        //     secure:process.env.NODE_ENV==="production",
        //     expires:60*60
        // });
    cookies().set('newToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600,
    path: '/',
});


            return res 
    }


       }
    catch(err){
        console.log("Error in login api",err);
        return NextResponse.json(
           {
            error: "ERROR"
           }, {
            status:500
           }
        )
    
}}



