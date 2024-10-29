import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone_number } = await request.json();
  try {
    const response = await client.create({
      _type: "request_call",
      name,
      email,
      phone_number,
      submittedAt: new Date().toISOString(),
    });

    if (response) {
      console.log("email to send");
      if (!process.env.NODE_ENV) {
        return;
      }

      // Configure your email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // You can use other providers, like 'hotmail' or SMTP details.
        auth: {
          user: process.env.EMAIL_USER, // Set up in your .env.local
          pass: process.env.EMAIL_PASS, // Set up in your .env.local
        },
      });

      try {
        // Compose email options
        await transporter.sendMail({
          from: process.env.EMAIL_PROJ, // application email
          to: process.env.EMAIL_ADMIN, // Admin email address
          subject: "Request a call",
          html: `
             <p> Wellcome to emaar</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone_number}</p>
        `,
        });

        console.log("email send successfully");

        // res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        // res.status(500).json({ error: "Error sending email" });
      }
    }

    return NextResponse.json({
      message: "Success",
      response: response,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error: error || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
