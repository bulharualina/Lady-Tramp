import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Adoption from "@/models/adoption";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      const extractAllAdoptions = await Adoption.find({ user: id }).populate(
        "adoptionItems.dog"
      );

      if (extractAllAdoptions) {
        return NextResponse.json({
          success: true,
          data: extractAllAdoptions,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to get all adoptions ! Please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authticated",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
