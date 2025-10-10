

import { NextResponse } from "next/server";
import { connectToDatabase } from "../db";

export async function POST(req: Request) {
  try {
    const { db } = await connectToDatabase(); //  ensure correct DB
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    // Check if a submission already exists for this email
    const existing = await db.collection("Submissions").findOne({ email });

    if (existing) {
      //  User has already submitted — block permanently
      return NextResponse.json({
        success: true,
        allowed: false,
        message: "You have already submitted the exam. Reattempt is not allowed.",
      });
    }

    //  No prior submission — allow
    return NextResponse.json({
      success: true,
      allowed: true,
      message: "You are allowed to take the exam.",
    });

  } catch (err: unknown) {
    console.error("Error checking submission:", err);
    return NextResponse.json(
      { success: false, error: "Server error while checking submissions." },
      { status: 500 }
    );
  }
}
