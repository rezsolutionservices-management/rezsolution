import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request) {
  const body = await request.json();
  const { data, error } = await supabaseAdmin
    .from("orders")
    .insert([{
      name: body.name,
      phone: body.phone,
      email: body.email,
      pickup: body.pickup,
      dropoff: body.dropoff,
      package_type: body.package_type,
      tier: body.tier,
      fee: body.fee,
      rush: body.rush,
      notes: body.notes,
      items: body.items,
      status: "new",
    }]);

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  let query = supabaseAdmin.from("orders").select("*").order("created_at", { ascending: false });

  if (date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    query = query.gte("created_at", start.toISOString()).lte("created_at", end.toISOString());
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}

export async function PATCH(request) {
  const body = await request.json();
  const { data, error } = await supabaseAdmin
    .from("orders")
    .update({ status: body.status })
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
