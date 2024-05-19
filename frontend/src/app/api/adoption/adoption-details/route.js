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

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Dog ID is required",
        });

      const extractAdoptionDetails = await Adoption.findById(id).populate(
        "adoptionItems.dog"
      );

      if (extractadoptionDetails) {
        return NextResponse.json({
          success: true,
          data: extractAdoptionDetails,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to get adoption details ! Please try again",
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
