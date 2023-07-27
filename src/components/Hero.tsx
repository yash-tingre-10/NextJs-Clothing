import Image from 'next/image';
import { FC } from 'react';
import HeroInfo from './hero/HeroInfo';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    return (
        <div className="container relative flex justify-center">
            <Image
                src="/assets/hero.png"
                alt="hero section"
                height={600}
                width={800}
            />
            <HeroInfo />
        </div>
    );
};

export default Hero;
