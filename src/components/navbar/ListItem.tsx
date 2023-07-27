import { FC, ReactNode } from 'react';

interface ListItemProps {
    children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
    return <li>{children}</li>;
};

export default ListItem;
