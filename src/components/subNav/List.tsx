import { FC } from 'react';
import { IList, navList } from './navList';
import ListItem from './ListItem';

interface ListProps {
    list: IList[];
}

const List: FC<ListProps> = ({ list }) => {
    return (
        <ul className="flex gap-10 justify-center font-light text-muted self-center">
            {list.map((item) => (
                <ListItem active={false} key={item.id}>
                    {item.title}
                </ListItem>
            ))}
        </ul>
    );
};

export default List;
