import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/components/Provider';

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
                <Provider>
                    <Navbar />
                    <div className="">{children}</div>
                    <Toaster />
                </Provider>
            </body>
        </html>
    );
}
