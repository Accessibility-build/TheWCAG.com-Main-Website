import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { success: false, message: "Password is required" },
        { status: 400 }
      )
    }

    const envPassword = process.env.NTP_PASSWORD

    if (!envPassword) {
      console.error("NTP_PASSWORD environment variable is not set")
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      )
    }

    // Convert both to lowercase before comparing
    const isValid = password.toLowerCase() === envPassword.toLowerCase()

    if (isValid) {
      return NextResponse.json({ success: true, message: "Access granted" })
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Error verifying NTP password:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    )
  }
}
