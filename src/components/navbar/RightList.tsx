import { FC, useEffect } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import Link from 'next/link';
import Logout from './Logout';

interface RightListProps {}

const RightList: FC<RightListProps> = async () => {
    const session = await getServerSession(authOptions);
    return (
        <ul className="flex gap-5">
            {!session && (
                <>
                    <li>
                        <Link href="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/auth/signup">Signup</Link>
                    </li>
                </>
            )}
            <li>
                <Link href="/">Help</Link>
            </li>
            <li>
                <Link href="/">Contact Us</Link>
            </li>
            {session && <Logout />}
        </ul>
    );
};

export default RightList;
