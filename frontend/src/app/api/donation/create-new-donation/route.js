import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Donation from "@/models/donation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewDonation = await Donation.create(data);

      if (saveNewDonation) {
        return NextResponse.json({
          success: true,
          message: "Donation successfully created!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to create the donation! Please try again.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated.",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}
