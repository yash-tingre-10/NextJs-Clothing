import { FC } from 'react';
import Image from 'next/image';

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
    return (
        <div className="grid gap-1">
            <div className="bg-secondary flex items-center justify-center h-80">
                <Image
                    src="/assets/hero.png"
                    alt="tee"
                    height={100}
                    width={400}
                    className="drop-shadow-lg"
                />
            </div>
            <div>Men Essential Tee</div>
            <div className="text-sm font-extralight">$30.00</div>
        </div>
    );
};

export default ProductCard;
