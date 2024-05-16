import connectToDB from "@/database";
//import AuthUser from '@/middleware/AuthUser';
import Dog from "@/models/dog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    //const isAuthUser = await AuthUser(req);

    //if (isAuthUser?.role === 'admin') {
    const extractData = await req.json();
    const { _id, name, description, sizes, gender, imageUrl } = extractData;

    const updatedDog = await Dog.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        name,
        description,
        sizes,
        gender,
        imageUrl,
      },
      { new: true }
    );

    if (updatedDog) {
      return NextResponse.json({
        success: true,
        message: "Dog updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the dog ! Please try again later",
      });
    }
    /*} else {
      return NextResponse.json({
        success: false,
        message: 'You are not authenticated',
      });
    }*/
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
