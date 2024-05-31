import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddToCart = Joi.object({
  userID: Joi.string().required(),
  dogID: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { dogID, userID } = data;

      const { error } = AddToCart.validate({ userID, dogID });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      console.log(dogID, userID);

      const isCurrentCartItemAlreadyExists = await Cart.find({
        dogID: dogID,
        userID: userID,
      });

      console.log(isCurrentCartItemAlreadyExists);

      if (isCurrentCartItemAlreadyExists?.length > 0) {
        return NextResponse.json({
          success: false,
          message: "Dog is already added in favorite! Please add different dog",
        });
      }

      const saveDogToCart = await Cart.create(data);

      console.log(saveDogToCart);

      if (saveDogToCart) {
        return NextResponse.json({
          success: true,
          message: "Dog is added to favorite !",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the dog to favorite! Please try again.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
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
