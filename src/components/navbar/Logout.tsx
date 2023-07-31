'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { FC } from 'react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
    return (
        <li onClick={() => signOut()}>
            <Link href="/auth/login">Logout</Link>
        </li>
    );
};

export default Logout;
