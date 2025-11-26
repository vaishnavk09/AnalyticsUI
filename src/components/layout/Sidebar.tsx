import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, FileText, GitFork, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { clsx } from 'clsx';

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useStore();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: MessageSquare, label: 'AI Insights', path: '/chat' },
        { icon: FileText, label: 'Reports', path: '/reports' },
        { icon: GitFork, label: 'Workflows', path: '/workflows' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside
            className={clsx(
                'fixed left-0 top-0 z-40 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out',
                isSidebarOpen ? 'w-64' : 'w-20'
            )}
        >
            <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
                <div className={clsx("flex items-center gap-2 font-bold text-xl text-cyan-500 dark:text-cyan-400", !isSidebarOpen && "justify-center w-full")}>
                    {isSidebarOpen ? <span>Analytics<span className="text-slate-900 dark:text-white">AI</span></span> : <span>AI</span>}
                </div>
                {isSidebarOpen && (
                    <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                        <ChevronLeft size={20} />
                    </button>
                )}
            </div>

            {!isSidebarOpen && (
                <div className="flex justify-center py-2">
                    <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}

            <nav className="mt-4 px-2 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                                isActive
                                    ? 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200',
                                !isSidebarOpen && 'justify-center'
                            )
                        }
                    >
                        <item.icon size={20} />
                        {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
