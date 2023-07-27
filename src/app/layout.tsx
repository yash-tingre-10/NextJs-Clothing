import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ez Clothing',
    description: 'Ez Clothing',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="">{children}</div>
            </body>
        </html>
    );
}
