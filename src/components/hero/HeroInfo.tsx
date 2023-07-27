import { ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../ui/button';

interface HeroInfoProps {}

const HeroInfo: FC<HeroInfoProps> = ({}) => {
    return (
        <div className="absolute left-10 bottom-10 flex flex-col font-extralight">
            <div>New Essential Tees</div>
            <div className="flex text-xs items-center underline underline-offset-4">
                <Button variant="link" className="p-0">
                    Learn More <ChevronRight size={16} />
                </Button>
            </div>
        </div>
    );
};

export default HeroInfo;
