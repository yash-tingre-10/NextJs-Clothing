import { FC } from 'react';
import { navList } from './subNav/navList';
import List from './subNav/List';

interface SubNavProps {}

const SubNav: FC<SubNavProps> = ({}) => {
    return <List list={navList} />;
};

export default SubNav;
