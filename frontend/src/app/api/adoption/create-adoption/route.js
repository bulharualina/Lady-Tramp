import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Adoption from "@/models/adoption";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewAdoption = await Adoption.create(data);

      if (saveNewAdoption) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Dogs are on the way !",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to create a adoption ! Please try again",
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
