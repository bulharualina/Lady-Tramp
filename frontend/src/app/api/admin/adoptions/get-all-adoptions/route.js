import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Adoption from "@/models/adoption";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const getAllAdoptions = await Adoption.find({})
        .populate("adoptionItems.dog")
        .populate("user");

      if (getAllAdoptions) {
        return NextResponse.json({
          success: true,
          data: getAllAdoptions,
        });
      } else {
        return NextResponse.json({
          success: false,
          message:
            "failed to fetch the adoptions ! Please try again after some time.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
