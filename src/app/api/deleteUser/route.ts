import { NextResponse } from "next/server";
import { connectToDatabase } from "../db";
import { ObjectId } from "mongodb";

export async function DELETE(req: Request) {
  try {
    const { db } = await connectToDatabase();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing document id" }, { status: 400 });
    }

    // Convert string to ObjectId
    const objectId = new ObjectId(id);

    const collection = db.collection("Submissions");

    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      return NextResponse.json(
        { success: true, message: "User  deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
  } catch (error: unknown) {
    console.error("❌ Delete error:", error);
    return NextResponse.json(
      { error: error || "Internal server error" },
      { status: 500 }
    );
  }
}
