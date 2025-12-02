import React from 'react';
import { Search, Bell, User, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useStore();

    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search analytics..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Alex Morgan</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Product Designer</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                        <User size={18} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
