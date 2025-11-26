import React from 'react';
import { User, Bell, Shield, Palette, Globe, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';
import Button from '../components/ui/Button';
import { clsx } from 'clsx';

const Settings = () => {
    const { isDarkMode, toggleDarkMode } = useStore();

    const sections = [
        {
            title: 'Account',
            icon: User,
            items: [
                { label: 'Profile Information', desc: 'Update your photo and personal details' },
                { label: 'Email Preferences', desc: 'Manage your email notifications' },
                { label: 'Security', desc: 'Change password and 2FA' },
            ]
        },
        {
            title: 'Application',
            icon: Globe,
            items: [
                { label: 'Language', desc: 'English (US)' },
                { label: 'Time Zone', desc: '(GMT-05:00) Eastern Time' },
            ]
        },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your account preferences and application settings.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <Palette size={20} className="text-cyan-500" />
                        Appearance
                    </h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Dark Mode</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Switch between light and dark themes</p>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className={clsx(
                                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
                                isDarkMode ? "bg-cyan-600" : "bg-slate-200"
                            )}
                        >
                            <span
                                className={clsx(
                                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                    isDarkMode ? "translate-x-6" : "translate-x-1"
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <Bell size={20} className="text-cyan-500" />
                        Notifications
                    </h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Email Notifications</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Receive daily summaries and alerts</p>
                        </div>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900 dark:text-white">Push Notifications</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Get real-time updates on your browser</p>
                        </div>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </div>
                    </div>
                </div>
            </div>

            {
                sections.map((section) => (
                    <div key={section.title} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                <section.icon size={20} className="text-cyan-500" />
                                {section.title}
                            </h2>
                        </div>
                        <div className="divide-y divide-slate-200 dark:divide-slate-800">
                            {section.items.map((item) => (
                                <div key={item.label} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white">{item.label}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                    <Button variant="ghost" size="sm">Edit</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }

            <div className="flex justify-end pt-4">
                <Button variant="danger" className="gap-2">
                    <LogOut size={16} /> Sign Out
                </Button>
            </div>
        </div >
    );
};

export default Settings;
