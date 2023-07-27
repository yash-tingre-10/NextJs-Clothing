import { FC } from 'react';
import ListItem from './ListItem';

interface ListProps {
    list: { id: number; title: string }[];
}

const List: FC<ListProps> = ({ list }) => {
    return (
        <ul className="flex gap-5">
            {list.map((item, index) => (
                <ListItem key={item.id}>{item.title}</ListItem>
            ))}
        </ul>
    );
};

export default List;
