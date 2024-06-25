import db from "@repo/db"
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  const request = await req.json()
  const reg = await db.registration.create({
    data: {
      ...request
    }
  })
  return NextResponse.json(reg);
}
