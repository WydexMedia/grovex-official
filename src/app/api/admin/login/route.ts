import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log(email)
    console.log(password)
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    // Call proskill login API from the SERVER (not the browser).
    // Example contract: returns { token: string, expiresIn: number, user: {...} }
    const resp = await fetch("https://exam.proskilledu.com/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Do NOT forward this request from client; this code runs server-side.
      body: JSON.stringify({ email, password }),
    });

    if (!resp.ok) {
      // Optionally map Site A error codes to user-friendly messages
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const data = await resp.json();

    // Return whatever minimal info the FE needs (never the token)
    return NextResponse.json({ success: true, user: data.user ?? null });
  } catch (err) {
    return NextResponse.json({ error: "Login failed",err }, { status: 500 });
  }
}