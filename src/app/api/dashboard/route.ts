// src/app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../db"; // <-- fix this import to your actual path

// export const dynamic = "force-dynamic"; // avoid caching in dev

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Optional: sort newest first. Remove .sort(...) if you don’t want sorting.
    const docs = await db
      .collection("Submissions")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Make ObjectId JSON-safe
    const submissions = docs.map((d) => ({
      ...d,
      _id: d._id?.toString?.() ?? d._id,
    }));

    return NextResponse.json(submissions, { status: 200 });
  } catch (e:unknown) {
    console.error("/api/dashboard error:", e);
    return NextResponse.json(
      { error: e ?? "Internal Server Error" },
      { status: 500 }
    );
  }
}
