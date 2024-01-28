"use client"
import { useEffect, useState } from 'react';
import '../globals.css';
import Sidebar from '@/components/Sidebar/index';
import MobileSidebar from '@/components/MobileSidebar/index';

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = (): void => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="md:grid md:grid-cols-4 md:gap-2 p-5 flex flex-col">
            <div className="col-span-1">
                {windowWidth > 754 ? (
                    <Sidebar />
                ) : (
                    <MobileSidebar open={false} onOpenChange={function(flag: boolean): void {
                            throw new Error('Function not implemented.');
                        } } />
                )}
            </div>
            <div className="col-span-3">{children}</div>
        </div>
    );
}
