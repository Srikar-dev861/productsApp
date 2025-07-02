import { NextResponse } from "next/server"

export async function POST(req){
    const response =  NextResponse.json({message:"Loggedout"},{status:200})
    response.cookies.set("newToken","",{
        maxAge:0,
        path:"/"
    })
    return response;

}
