import connectToDB from '@/database';
import Dog from '@/models/dog';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        await connectToDB();

        const extractAlldogs = await Dog.find({});
        if (extractAlldogs) {
            const extractAlldogs = await Dog.find({});
            if (extractAlldogs) {
                return NextResponse.json({
                    success: true,
                    data: extractAlldogs,
                });
            } else {
                return NextResponse.json({
                    success: false,
                    status: 204,
                    message: 'No dogs found',
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                message: 'You are not autorized',
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong ! Please try again later',
        });
    }
}
