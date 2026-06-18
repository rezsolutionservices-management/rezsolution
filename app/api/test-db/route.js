import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const { data, error } = await supabaseAdmin.from("orders").select("*").limit(1);
  return NextResponse.json({ 
    success: !error, 
    error: error?.message || null,
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ? "set" : "missing",
    key: process.env.SUPABASE_SERVICE_ROLE_KEY ? "set" : "missing",
  });
}
