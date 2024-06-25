import db from "@repo/db"
import { NextRequest, NextResponse } from "next/server";
export default async function handler(req: NextRequest, res: NextResponse) {
  const reg = await db.registration.create({
    data: {
      ...req.body
    }
  })

  NextResponse.json(reg);
}
