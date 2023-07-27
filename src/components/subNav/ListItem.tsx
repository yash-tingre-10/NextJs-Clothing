import { FC, ReactNode } from 'react';
import { Button } from '../ui/button';

interface ListItemProps {
    children: ReactNode;
    active?: boolean;
}

const ListItem: FC<ListItemProps> = ({ children, active }) => {
    return (
        <li
            className={`${
                active
                    ? 'text-muted-foreground font-normal underline underline-offset-4'
                    : ''
            }`}
        >
            {children}
        </li>
    );
};

export default ListItem;
