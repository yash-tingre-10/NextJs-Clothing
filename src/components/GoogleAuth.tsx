import { FC } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

interface GoogleAuthProps {}

const GoogleAuth: FC<GoogleAuthProps> = ({}) => {
    return (
        <Button variant="outline" className="gap-5">
            <Image
                src="/assets/google.png"
                height={20}
                width={20}
                alt="Google icon"
            />
            Continue with Google
        </Button>
    );
};

export default GoogleAuth;
