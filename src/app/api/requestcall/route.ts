import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email, phone_number } = await request.json();
  try {
    const response = await client.create({
      _type: "request_call",
      name,
      email,
      phone_number,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Success",
      response: response,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error",
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
