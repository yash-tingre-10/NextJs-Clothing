import { FC } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge';

interface CartIconProps {}

const CartIcon: FC<CartIconProps> = ({}) => {
    return (
        <div className="relative">
            <ShoppingCart size={18} />
            <Badge className="absolute -top-4 -right-4" variant="destructive">
                0
            </Badge>
        </div>
    );
};

export default CartIcon;
