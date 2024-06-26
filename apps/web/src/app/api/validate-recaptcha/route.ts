import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const { recaptchaResponse } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET;
  
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();

    console.log("---------------------------------------------")
    console.log(data)
  
    if (data.success) {
        return NextResponse.json({success: true})
    } 
    return NextResponse.json({success: false})
  }