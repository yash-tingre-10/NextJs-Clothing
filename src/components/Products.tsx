import { FC } from 'react';
import Card from './products/ProductCard';
import ProductCard from './products/ProductCard';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex justify-center">
                <Button>
                    Shop More
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </>
    );
};

export default Products;
