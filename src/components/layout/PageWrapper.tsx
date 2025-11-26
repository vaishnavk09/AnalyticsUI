import React from 'react';
import { useStore } from '../../store/useStore';
import { clsx } from 'clsx';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

import Background3D from './Background3D';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    const { isSidebarOpen } = useStore();

    return (
        <>
            <Background3D />
            <div className="min-h-screen transition-colors duration-300 relative">
                <Sidebar />
                <div
                    className={clsx(
                        'transition-all duration-300 ease-in-out',
                        isSidebarOpen ? 'ml-64' : 'ml-20'
                    )}
                >
                    <Navbar />
                    <main className="p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default PageWrapper;
