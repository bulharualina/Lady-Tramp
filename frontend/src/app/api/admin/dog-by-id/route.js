import connectToDB from "@/database";
import Dog from "@/models/dog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const dogId = searchParams.get("id");

    if (!dogId) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Dog id is required",
      });
    }

    const getData = await Dog.find({ _id: dogId });

    if (getData && getData.length) {
      return NextResponse.json({ success: true, data: getData[0] });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Dog found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
