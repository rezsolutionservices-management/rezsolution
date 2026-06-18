import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === "admin" && password === adminPassword) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
