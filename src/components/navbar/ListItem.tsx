import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ListItemProps {
    href: string;
    children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ href, children }) => {
    return (
        <li>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default ListItem;
