import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    passwordSet: !!process.env.ADMIN_PASSWORD,
    length: process.env.ADMIN_PASSWORD?.length || 0
  });
}
