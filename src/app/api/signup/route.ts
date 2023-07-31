import { db } from '@/db';
import { users } from '@/db/schema';
import { hash } from '@/lib/hash';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();
    const hashedPassword = await hash(password);
    try {
        const res = await db
            .insert(users)
            .values({ name, email, password: hashedPassword })
            .returning();
        console.log(res);
    } catch (e: any) {
        if (e.code && e.code == '23505')
            return NextResponse.json({
                status: 'failure',
                message: 'Email already exists',
            });
    }

    return NextResponse.json({
        status: 'success',
        message: 'Signup successful',
    });
}
