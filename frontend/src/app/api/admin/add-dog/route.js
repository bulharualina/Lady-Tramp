import connectToDB from "@/database";
import Dog from "@/models/dog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewDogSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  sizes: Joi.string().required(),
  gender: Joi.string().required(),
  imageUrl: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const user = "admin";

    if (user === "admin") {
      const extractData = await req.json();

      const { name, description, sizes, gender, imageUrl } = extractData;

      const { error } = AddNewDogSchema.validate({
        name,
        description,
        sizes,
        gender,
        imageUrl,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedDog = await Dog.create(extractData);

      if (newlyCreatedDog) {
        return NextResponse.json({
          success: true,
          message: "Dog added successfuly",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the dog! Please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized!",
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
