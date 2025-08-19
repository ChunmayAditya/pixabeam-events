import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, eventId } = body;

    if (!name || !eventId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await pool.query(
      "INSERT INTO rsvps (name, event_id) VALUES ($1, $2)",
      [name, eventId]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving RSVP:", error); // this will show in your terminal
    return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
  }
}