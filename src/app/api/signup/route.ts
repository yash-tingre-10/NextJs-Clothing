import { db } from '@/db';
import { users } from '@/db/schema';

export async function POST(req: Request) {
    // let res: Users[] = await db.select().from(users);
    // console.log(res);
    const body = await req.json();
    console.log(body);
    // await db.insert(users).values({ name: 'Andrew' });

    const res = await db.insert(users).values(body).returning();
    console.log(res);
    return new Response('ok');
}
