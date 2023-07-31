import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/products/ProductCard';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div className="container mt-5 flex gap-5">
            <FilterBar />
            <div className="flex-1 grid grid-cols-3 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default page;
