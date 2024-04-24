import connectToDB from '@/database';
import AuthUser from '@/middleware/AuthUser';
import Dog from '@/models/dog';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === 'admin') {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');

      if (!id)
        return NextResponse.json({
          success: false,
          message: 'Dog ID is required',
        });

      const deletedDog = await Dog.findByIdAndDelete(id);

      if (deletedDog) {
        return NextResponse.json({
          success: true,
          message: 'Dog deleted successfully',
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to delete the dog ! Please try again',
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: 'You are not authenticated',
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong ! Please try again later',
    });
  }
}
