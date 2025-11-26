import React, { useLayoutEffect, useRef } from 'react';
import { DollarSign, Users, MousePointerClick, ShoppingBag, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import KpiCard from '../components/cards/KpiCard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import AreaChart from '../components/charts/AreaChart';

const Dashboard = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered fade-in for all children
            gsap.fromTo(
                ".dashboard-item",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="space-y-6">
            <div className="flex items-center justify-between dashboard-item">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Export Report
                    </button>
                    <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors shadow-sm shadow-cyan-200 dark:shadow-none">
                        + New Campaign
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="dashboard-item">
                    <KpiCard title="Total Revenue" value="$54,239" trend={12.5} icon={DollarSign} color="indigo" />
                </div>
                <div className="dashboard-item">
                    <KpiCard title="Active Users" value="2,543" trend={8.2} icon={Users} color="emerald" />
                </div>
                <div className="dashboard-item">
                    <KpiCard title="Bounce Rate" value="42.3%" trend={-2.4} icon={MousePointerClick} color="rose" />
                </div>
                <div className="dashboard-item">
                    <KpiCard title="Total Orders" value="1,253" trend={5.7} icon={ShoppingBag} color="amber" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="dashboard-item lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue Trend</h3>
                        <select className="bg-slate-50 dark:bg-slate-800 border-none text-sm text-slate-600 dark:text-slate-400 rounded-lg focus:ring-2 focus:ring-cyan-500">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <LineChart />
                </div>

                <div className="dashboard-item bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Sales by Category</h3>
                    </div>
                    <BarChart />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="dashboard-item bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Device Distribution</h3>
                    </div>
                    <PieChart />
                </div>

                <div className="dashboard-item lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">User Growth</h3>
                    </div>
                    <AreaChart />
                </div>
            </div>

            <div className="dashboard-item bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold mb-2">AI Insights</h3>
                        <p className="text-cyan-100 max-w-xl">Your revenue is trending up by 12% compared to last week. The "Electronics" category is driving the most growth.</p>
                    </div>
                    <button className="bg-white text-cyan-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-cyan-50 transition-colors flex items-center gap-2">
                        Ask AI <ArrowUpRight size={16} />
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            </div>
        </div>
    );
};

export default Dashboard;
